import { Layout } from '../layout/Layout';
import { Section, SectionTitle, SectionText, Img } from '../styles/GlobalComponents';

const SponsorPage = () => {
  return (
    <Layout>
      <Section grid>
        <SectionTitle main center>
          Sponsorship & Donations
        </SectionTitle>
        <br></br>
        <SectionText>
          Code Confidence is a non-profit organization working towards encouraging women. In order for us to cover our operational costs and sustain in the long run, we are open to donations ❤️
          <br></br><br></br>
          For sponorship or donations, feel free to contact us at hello@codeconfidence.com
        </SectionText>
      </Section>
      <Section grid>
        <Img src='/images/aws.webp'></Img>
        <Img src='/images/pycharm.jpg'></Img>
        <Img src='/images/harvard.webp'></Img>
      </Section>
    </Layout>
  );
};

export default SponsorPage;