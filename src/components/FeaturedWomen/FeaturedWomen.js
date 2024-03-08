import React, { useState } from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, Name, LineDivider, ButtonList, Img, ModalContainer } from './FeaturedWomenStyles';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { featuredwomen } from '../../constants/constants';
import { MdOutlineMessage, MdClose } from "react-icons/md";
import { SlCalender, SlUserFollow } from "react-icons/sl";
import { Modal, TextField, Button, IconButton } from '@mui/material';

const FeaturedWomen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Section id="featuredwomen">
      <SectionTitle main>SheSquad: Featured Women</SectionTitle>
      <SectionText>Meet our featured women from March 2024. Find an open slot in their calender, follow them on social media or drop them a intro message!</SectionText>
      <GridContainer>
        {featuredwomen.map((p, i) => {
          return (
            <BlogCard key={i}>
              <Img src={p.image} />
              <Name title={p.title}>{p.title}</Name>
              <LineDivider />
              <CardInfo className="card-info">{p.description}</CardInfo>
              <ButtonList>
                <ExternalLinks href={p.visit}>Book <SlCalender></SlCalender></ExternalLinks>
                <ExternalLinks href={p.visit}>Follow <SlUserFollow></SlUserFollow></ExternalLinks>
                <ExternalLinks href={p.source} onClick={handleOpenModal}>Message <MdOutlineMessage></MdOutlineMessage></ExternalLinks>
              </ButtonList>
              <Modal open={isModalOpen} onClose={handleCloseModal}>
                <ModalContainer>
                  <IconButton style={{ position: 'absolute', top: '5px', right: '5px' }} onClick={handleCloseModal}><MdClose /></IconButton>
                  <TextField label="Message" variant="outlined" fullWidth multiline />
                  <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>Send</Button>
                </ModalContainer>
              </Modal>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  );
};

export default FeaturedWomen;