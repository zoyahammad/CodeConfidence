import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './LandingTextStyles';

const LandingText = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Calling all amazing women!
        </SectionTitle>
        <SectionText>
        We understand the challenges you face, from self-doubt to imposter syndrome. But here's the secret: every woman has the potential to be a tech rockstar! Join our supportive community, tackle fun coding challenges, and connect with inspiring mentors who will guide you on your journey. Get ready to unlock your potential and code your future!
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default LandingText;
