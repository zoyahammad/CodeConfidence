import React from 'react';
import { AiFillSlackCircle, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { SocialIcons } from '../Header/HeaderStyles';
import { ContactContainer, FooterContainer, LinkItem, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIconsContainer>
        <ContactContainer>
          <LinkItem href="mailto:hello@codeconfidence.com">
            hello@codeconfidence.com
          </LinkItem>
          <LinkItem href="sponsor">
            Donate
          </LinkItem>
        </ContactContainer>
        <SocialContainer>
          <SocialIcons href="https://medium.com/@zoya.hammad99">
            <AiFillSlackCircle size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/zoya-hammad-5194812a6/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://medium.com/@zoya.hammad99">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://medium.com/@zoya.hammad99">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterContainer>
  );
};

export default Footer;
