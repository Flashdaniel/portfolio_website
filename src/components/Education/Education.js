import React from 'react';
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from '../../styles/GlobalComponents';
import {
  EducationGrid,
  EducationCard,
  CardTop,
  InstitutionBadge,
  PeriodText,
  InstitutionName,
  CredentialName,
  EducationDescription,
  FocusTagsContainer,
  FocusTag,
} from './EducationStyles';
import { educationData } from '../../constants/constants';

const Education = () => {
  return (
    <Section id="education">
      <SectionDivider divider />
      <SectionTitle>Education &amp; Technical Foundation</SectionTitle>
      <SectionText>
        Academic engineering training paired with foundational computer science and specialized software development curricula.
      </SectionText>

      <EducationGrid>
        {educationData.map((item, index) => (
          <EducationCard key={index}>
            <CardTop>
              <InstitutionBadge>{item.badge}</InstitutionBadge>
              <PeriodText>{item.period}</PeriodText>
            </CardTop>
            <div>
              <InstitutionName>{item.institution}</InstitutionName>
              <CredentialName>{item.credential}</CredentialName>
            </div>
            <EducationDescription>{item.description}</EducationDescription>
            <FocusTagsContainer>
              {item.focusAreas.map((tag, idx) => (
                <FocusTag key={idx}>{tag}</FocusTag>
              ))}
            </FocusTagsContainer>
          </EducationCard>
        ))}
      </EducationGrid>
    </Section>
  );
};

export default Education;
