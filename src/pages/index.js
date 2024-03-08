import Acomplishments from '../components/JoinUs/JoinUs';
import LandingImage from '../components/LandingImage/LandingImage';
import LandingText from '../components/LandingText/LandingText';
import FeaturedWomen from '../components/FeaturedWomen/FeaturedWomen';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const HomePage = () => {
  return (
    <Layout>
      <Section grid>
        <LandingText />
        <LandingImage />
      </Section>
      <FeaturedWomen />
      <Acomplishments />
    </Layout>
  );
};

export default HomePage;