import React from 'react';
import { Layout } from '../layout/Layout';
import { Section, LeftSection, SectionTitle, SectionText } from '../styles/GlobalComponents';
import ApplicationForm from '../components/ApplicationForm/ApplicationForm';
import PieChart from '../components/PieChart/PieChart';

const SheSquadPage = () => {
  return (
    <Layout>
      <Section grid>
        <LeftSection>
          <SectionTitle main center>
            SheSquad 🦸‍♀️
          </SectionTitle>
          <SectionText>
            Meet the incredible women leading the charge in tech: your SheSquad! These accomplished mentors are passionate about empowering others and sharing their knowledge. Explore their profiles, get inspired by their stories, and take the next step in your tech journey.
          </SectionText>
        </LeftSection>
        <PieChart></PieChart>
      </Section>
      <ApplicationForm></ApplicationForm>
    </Layout>
  );
};

export default SheSquadPage;
