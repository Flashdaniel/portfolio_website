import React, { useState } from 'react';
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineCheck,
  AiOutlineCopy,
  AiFillLinkedin,
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
  ContactLeft,
  ContactHeading,
  ContactText,
  ContactActions,
  CopyEmailButton,
  MailtoLink,
  LinkedInButton,
  ContactRight,
  InfoItem,
} from './ContactStyles';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'flashdaniel0@gmail.com';
  const phone = '+234 810 076 7459';
  const linkedin = 'https://www.linkedin.com/in/daniel-nweze-017909214/';

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <Section id="contact">
      <SectionDivider divider />
      <SectionTitle>Let's Connect</SectionTitle>
      <SectionText>
        Whether you are seeking a Frontend Engineer for a high-impact team, a remote product build, or a technical consultation, my inbox is open.
      </SectionText>

      <ContactCard>
        <ContactLeft>
          <ContactHeading>Ready to build something exceptional?</ContactHeading>
          <ContactText>
            I'm currently available for full-time frontend engineering roles, contract work, and technical collaborations. Let's discuss how I can contribute to your engineering goals.
          </ContactText>
          <ContactActions>
            <CopyEmailButton
              onClick={handleCopy}
              type="button"
              aria-label="Copy email address to clipboard"
            >
              {copied ? (
                <>
                  <AiOutlineCheck size="1.8rem" aria-hidden="true" />
                  <span>Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <AiOutlineCopy size="1.8rem" aria-hidden="true" />
                  <span>Copy Email Address</span>
                </>
              )}
            </CopyEmailButton>
            <MailtoLink
              href={`mailto:${email}`}
              aria-label="Open email client to send message"
            >
              <AiOutlineMail size="1.8rem" aria-hidden="true" />
              <span>Send Direct Email</span>
            </MailtoLink>
            <LinkedInButton
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Daniel Nweze on LinkedIn (opens in new tab)"
            >
              <AiFillLinkedin size="1.8rem" aria-hidden="true" />
              <span>Connect on LinkedIn</span>
            </LinkedInButton>
          </ContactActions>
        </ContactLeft>

        <ContactRight>
          <InfoItem>
            <div className="icon" aria-hidden="true" style={{ background: 'rgba(10, 102, 194, 0.15)', color: '#38bdf8' }}>
              <AiFillLinkedin size="2.2rem" />
            </div>
            <div className="content">
              <span className="label">LinkedIn Profile</span>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="value"
                aria-label="Open Daniel Nweze's LinkedIn profile in a new tab"
              >
                daniel-nweze-017909214 ↗
              </a>
            </div>
          </InfoItem>

          <InfoItem>
            <div className="icon" aria-hidden="true">
              <AiOutlineMail size="2.2rem" />
            </div>
            <div className="content">
              <span className="label">Direct Email</span>
              <a href={`mailto:${email}`} className="value">
                {email}
              </a>
            </div>
          </InfoItem>

          <InfoItem>
            <div className="icon" aria-hidden="true">
              <AiOutlinePhone size="2.2rem" />
            </div>
            <div className="content">
              <span className="label">Phone / WhatsApp</span>
              <a href="tel:+2348100767459" className="value">
                {phone}
              </a>
            </div>
          </InfoItem>

          <InfoItem>
            <div className="icon" aria-hidden="true">
              <HiOutlineLocationMarker size="2.2rem" />
            </div>
            <div className="content">
              <span className="label">Location</span>
              <span className="value">Nigeria • Available for Global Remote</span>
            </div>
          </InfoItem>
        </ContactRight>
      </ContactCard>
    </Section>
  );
};

export default Contact;
