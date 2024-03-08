import React from 'react';
import Link from 'next/link';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Boxes } from './JoinUsStyles';
import { ButtonBase, Card, CardContent, Typography } from '@mui/material';
import { joinUsData } from '../../constants/constants';

const JoinUs = () => (
  <Section>
    <SectionTitle>Join Our Mission</SectionTitle>
    <Boxes>
      {joinUsData.map((data) => (
        <Link key={data.id} href="shesquad" passHref>
          <ButtonBase
            component="a"
            sx={{ borderRadius: '8px' }}
          >
            <Card sx={{ maxWidth: 400, margin: 2, borderRadius: '13px' }}>
              <CardContent>
                <Typography gutterBottom variant="h8" component="div">
                  {data.title}
                </Typography><br></br>
                <Typography variant="h7" color="text.secondary">
                  {data.description}
                </Typography>
              </CardContent>
            </Card>
          </ButtonBase>
        </Link>
      ))}
    </Boxes>
  </Section>
);

export default JoinUs;
