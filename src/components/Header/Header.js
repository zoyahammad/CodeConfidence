import Link from 'next/link';
import React from 'react';
import { CgProfile } from "react-icons/cg";
import { Container, LogoContainer, ProfileButtonContainer, SocialIconsContainer, SocialIcons, StyledLink } from './HeaderStyles';

const Header = () => (
  <Container>
    <LogoContainer>
      <Link href="/" style={{ display: 'flex', alignItems: 'center', color: "white" }}>
        <div>
          <img src="/codelogo.png" height={40} width={40} />
          <span style={{ marginLeft: 10, marginTop: 7, fontSize: 40, fontFamily: "cursive" }}>Code Confidence</span>
        </div>
      </Link>
    </LogoContainer>
    <SocialIconsContainer>
      <li>
        <Link href="/" legacyBehavior>
          <StyledLink>Home</StyledLink>
        </Link>
      </li>
      <li>
        <Link href="shesquad" legacyBehavior>
          <StyledLink>SheSquad</StyledLink>
        </Link>
      </li>
      <li>
        <Link href="crusades">
          <StyledLink>CodeCrusades</StyledLink>
        </Link>
      </li>
      <li>
        <Link href="events" legacyBehavior>
          <StyledLink>Events</StyledLink>
        </Link>
      </li>
      <li>
        <Link href="sponsor" legacyBehavior>
          <StyledLink>Sponsor</StyledLink>
        </Link>
      </li>
    </SocialIconsContainer>
    <ProfileButtonContainer>
      <SocialIcons href="profile">
        <CgProfile size="3rem" />
      </SocialIcons>
    </ProfileButtonContainer>
  </Container>
);

export default Header;
