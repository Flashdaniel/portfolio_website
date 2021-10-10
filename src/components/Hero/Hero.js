import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, <br />
          I'm Nwez Daniel
        </SectionTitle>
        <SectionText>
        A  UI Designer and Full Stack Web Developer focused on crafting clean & user-friendly experiences, I am
							passionate about building excellent softwares that improves the
							lives of those around me.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;