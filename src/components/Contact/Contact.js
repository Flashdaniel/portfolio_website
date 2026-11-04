import React, { useState } from 'react';
import {
  AiOutlineMail,
  AiOutlineCheck,
  AiOutlineCopy,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineDownload,
  AiOutlineCheckCircle,
  AiOutlineExclamationCircle,
  AiOutlineSend,
} from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';

import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from '../../styles/GlobalComponents';
import {
  ContactCard,
  ContactInfoCol,
  ContactSubheading,
  ContactDescription,
  ChannelsList,
  ChannelCard,
  QuickActionsRow,
  CvDownloadButton,
  CopyEmailButton,
  ContactFormCol,
  FormHeading,
  FormSubtext,
  Form,
  FormGroup,
  Label,
  Input,
  Textarea,
  FieldError,
  SubmitButton,
  Spinner,
  SuccessCard,
  ResetButton,
  ErrorBanner,
  FallbackMailtoBtn,
  RetryBtn,
} from './ContactStyles';

const Contact = () => {
  const email = 'danielchibundunweze@gmail.com';
  const linkedin = 'https://www.linkedin.com/in/daniel-nweze-017909214/';
  const github = 'https://github.com/Flashdaniel';
  const WEB3FORMS_ACCESS_KEY = 'c9579146-151c-46b5-aeff-93865679505c';

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case 'name':
        if (!value || value.trim().length < 2) {
          return 'Please enter your name (at least 2 characters).';
        }
        return '';
      case 'email':
        if (!value || !value.trim()) {
          return 'Please enter your email address.';
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) {
          return 'Please enter a valid email address (e.g., name@company.com).';
        }
        return '';
      case 'message':
        if (!value || value.trim().length < 10) {
          return 'Please enter a message with at least 10 characters.';
        }
        return '';
      default:
        return '';
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };
    // Filter out empty errors
    const activeErrors = Object.entries(newErrors).reduce((acc, [k, v]) => {
      if (v) acc[k] = v;
      return acc;
    }, {});
    setErrors(activeErrors);
    return Object.keys(activeErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const errorMsg = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const errorMsg = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setTouched({ name: true, email: true, message: true });
    if (!validateForm()) {
      // Focus first erroneous input
      const firstErrorKey = ['name', 'email', 'message'].find(
        (key) => validateField(key, formData[key])
      );
      if (firstErrorKey && typeof document !== 'undefined') {
        const inputEl = document.getElementById(`contact-${firstErrorKey}`);
        if (inputEl) inputEl.focus();
      }
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`,
        message: formData.message.trim(),
        from_name: `${formData.name.trim()} (Portfolio)`,
      };

      // Primary: Send directly to Web3Forms API (compatible with static export & server deployments)
      let response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Fallback: If client ad-blocker blocks api.web3forms.com, route via Next.js API
      if (!response.ok && response.status !== 400 && response.status !== 422) {
        try {
          const localApiRes = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
          });
          if (localApiRes.ok) {
            response = localApiRes;
          }
        } catch (_) {
          // If local API is not available (e.g. static export), keep original response
        }
      }

      const result = await response.json().catch(() => ({}));

      if (response.ok && (result.success === true || result.success === 'true')) {
        setStatus('success');
      } else {
        const msg =
          result.message ||
          result.error ||
          'Unable to complete submission through the web service.';
        setErrorMessage(msg);
        setStatus('error');
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setErrorMessage(
        'Network error or service interruption. You can retry or reach out directly using your email client.'
      );
      setStatus('error');
    }
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setTouched({});
    setStatus('idle');
    setErrorMessage('');
  };

  const fallbackMailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
    formData.subject || `Message from ${formData.name || 'Portfolio Visitor'}`
  )}&body=${encodeURIComponent(
    `Hi Daniel,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
  )}`;

  return (
    <Section id="contact" aria-label="Contact Information &amp; Message Form">
      <SectionDivider divider />
      <SectionTitle>Let's build something useful.</SectionTitle>
      <SectionText>
        Whether you have an ambitious product to launch, a frontend engineering role to fill, or need a technical review, I'm ready to collaborate.
      </SectionText>

      <ContactCard>
        {/* Left Column: Direct Communication Channels */}
        <ContactInfoCol>
          <div>
            <ContactSubheading>Direct Channels</ContactSubheading>
            <ContactDescription>
              Feel free to connect directly through any of the channels below or submit the message form for a prompt response.
            </ContactDescription>
          </div>

          <ChannelsList>
            {/* Email */}
            <ChannelCard>
              <div className="channel-icon" aria-hidden="true">
                <AiOutlineMail size="2rem" />
              </div>
              <div className="channel-info">
                <span className="channel-label">Email</span>
                <a
                  href={`mailto:${email}`}
                  className="channel-value"
                  title={`Send email to ${email}`}
                >
                  {email}
                </a>
              </div>
            </ChannelCard>

            {/* LinkedIn */}
            <ChannelCard>
              <div className="channel-icon" aria-hidden="true">
                <AiFillLinkedin size="2rem" />
              </div>
              <div className="channel-info">
                <span className="channel-label">LinkedIn</span>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-value"
                  aria-label="Daniel Nweze's LinkedIn Profile (opens in new tab)"
                >
                  daniel-nweze-017909214 ↗
                </a>
              </div>
            </ChannelCard>

            {/* GitHub */}
            <ChannelCard>
              <div className="channel-icon" aria-hidden="true">
                <AiFillGithub size="2rem" />
              </div>
              <div className="channel-info">
                <span className="channel-label">GitHub</span>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channel-value"
                  aria-label="Daniel Nweze's GitHub Profile (opens in new tab)"
                >
                  github.com/Flashdaniel ↗
                </a>
              </div>
            </ChannelCard>

            {/* Location / Status */}
            <ChannelCard>
              <div className="channel-icon" aria-hidden="true">
                <HiOutlineLocationMarker size="2rem" />
              </div>
              <div className="channel-info">
                <span className="channel-label">Location &amp; Availability</span>
                <span className="channel-value">Nigeria • Remote Worldwide</span>
              </div>
            </ChannelCard>
          </ChannelsList>

          <QuickActionsRow>
            <CvDownloadButton
              href="/Daniel_Nweze_CV.pdf"
              download="Daniel_Nweze_Frontend_Engineer_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Daniel Nweze's CV (PDF)"
            >
              <AiOutlineDownload size="1.8rem" aria-hidden="true" />
              <span>Download CV</span>
            </CvDownloadButton>

            <CopyEmailButton
              type="button"
              onClick={handleCopyEmail}
              aria-label="Copy email address to clipboard"
            >
              {copied ? (
                <>
                  <AiOutlineCheck size="1.8rem" aria-hidden="true" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <AiOutlineCopy size="1.8rem" aria-hidden="true" />
                  <span>Copy Email</span>
                </>
              )}
            </CopyEmailButton>
          </QuickActionsRow>
        </ContactInfoCol>

        {/* Right Column: Working Contact Form */}
        <ContactFormCol>
          <FormHeading>Send a Message</FormHeading>
          <FormSubtext>
            Submit your message directly. Every submission is validated, delivered, and responded to.
          </FormSubtext>

          {status === 'success' ? (
            <SuccessCard role="region" aria-live="polite">
              <AiOutlineCheckCircle
                className="success-icon"
                size="4.8rem"
                aria-hidden="true"
              />
              <h4>Message Sent Successfully!</h4>
              <p>
                Thank you, <strong>{formData.name || 'there'}</strong>. Your message has been delivered to my inbox. I will reply to{' '}
                <strong>{formData.email}</strong> shortly.
              </p>
              <ResetButton type="button" onClick={handleReset}>
                Send Another Message
              </ResetButton>
            </SuccessCard>
          ) : (
            <Form
              onSubmit={handleSubmit}
              noValidate
              aria-busy={status === 'submitting'}
            >
              {status === 'error' && (
                <ErrorBanner role="alert" aria-live="assertive">
                  <div className="error-top">
                    <AiOutlineExclamationCircle
                      size="2rem"
                      aria-hidden="true"
                    />
                    <span>Unable to Deliver Form</span>
                  </div>
                  <div>
                    {errorMessage ||
                      'An unexpected error occurred. You can retry or send your message directly via your email client.'}
                  </div>
                  <div className="fallback-actions">
                    <FallbackMailtoBtn
                      href={fallbackMailtoUrl}
                      aria-label="Open pre-filled email in default client"
                    >
                      <AiOutlineMail size="1.5rem" aria-hidden="true" />
                      <span>Send via Email Client</span>
                    </FallbackMailtoBtn>
                    <RetryBtn
                      type="button"
                      onClick={handleSubmit}
                      aria-label="Retry form submission"
                    >
                      Retry
                    </RetryBtn>
                  </div>
                </ErrorBanner>
              )}

              {/* Name Field */}
              <FormGroup>
                <Label htmlFor="contact-name">
                  <span>Your Name</span>
                  <span className="required" aria-hidden="true">
                    *
                  </span>
                </Label>
                <Input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="e.g., Alex Johnson"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={status === 'submitting'}
                  aria-required="true"
                  aria-invalid={touched.name && Boolean(errors.name)}
                  aria-describedby={
                    touched.name && errors.name ? 'contact-name-error' : undefined
                  }
                />
                {touched.name && errors.name && (
                  <FieldError id="contact-name-error" role="alert">
                    {errors.name}
                  </FieldError>
                )}
              </FormGroup>

              {/* Email Field */}
              <FormGroup>
                <Label htmlFor="contact-email">
                  <span>Email Address</span>
                  <span className="required" aria-hidden="true">
                    *
                  </span>
                </Label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="e.g., alex@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={status === 'submitting'}
                  aria-required="true"
                  aria-invalid={touched.email && Boolean(errors.email)}
                  aria-describedby={
                    touched.email && errors.email ? 'contact-email-error' : undefined
                  }
                />
                {touched.email && errors.email && (
                  <FieldError id="contact-email-error" role="alert">
                    {errors.email}
                  </FieldError>
                )}
              </FormGroup>

              {/* Subject Field (Optional) */}
              <FormGroup>
                <Label htmlFor="contact-subject">
                  <span>Subject</span>
                </Label>
                <Input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="e.g., Frontend Engineer Role / Project Consultation"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={status === 'submitting'}
                />
              </FormGroup>

              {/* Message Field */}
              <FormGroup>
                <Label htmlFor="contact-message">
                  <span>Message</span>
                  <span className="required" aria-hidden="true">
                    *
                  </span>
                </Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Describe your project, team requirements, or collaboration idea..."
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={status === 'submitting'}
                  aria-required="true"
                  aria-invalid={touched.message && Boolean(errors.message)}
                  aria-describedby={
                    touched.message && errors.message
                      ? 'contact-message-error'
                      : undefined
                  }
                />
                {touched.message && errors.message && (
                  <FieldError id="contact-message-error" role="alert">
                    {errors.message}
                  </FieldError>
                )}
              </FormGroup>

              <SubmitButton
                type="submit"
                disabled={status === 'submitting'}
                aria-label={
                  status === 'submitting'
                    ? 'Sending message, please wait...'
                    : 'Send message'
                }
              >
                {status === 'submitting' ? (
                  <>
                    <Spinner aria-hidden="true" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <AiOutlineSend size="1.8rem" aria-hidden="true" />
                  </>
                )}
              </SubmitButton>
            </Form>
          )}
        </ContactFormCol>
      </ContactCard>
    </Section>
  );
};

export default Contact;
