import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, <br />
          I'm Nweze Daniel
        </SectionTitle>
        <SectionText>
        A  Full Stack Web Developer focused on crafting clean & user-friendly experiences, I am
							passionate about building excellent softwares that improves the
							lives of those around me.
        </SectionText>
        <Link href='#about'>
          <Button onClick={props.handleClick}>Learn More</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;