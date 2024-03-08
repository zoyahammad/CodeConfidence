import * as React from 'react';
import { Container } from './EventCardsStyles';
import { SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { events } from '../../constants/constants';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

const EventCards = () => {
  return (
    <Container>
      <SectionTitle>Event Directory March 2024</SectionTitle>
      <SectionText>We have curated a directory of upcoming internal and external events that you can join free of cost. Some of these might have special offers for Code Confidence members.
        Have an event you would like to spread word about? Reach out to us at  <b>hello@codeconfidence.com</b>.
        <br></br> <br></br>
        Watch out this space for news about <b>scholarships</b> too!
      </SectionText>
      {events.map((event) => (
        <Card key={event.id} sx={{ maxWidth: 345, margin: 2 }}>
          <CardMedia
            component="img"
            alt={event.title}
            height="140"
            image={event.image}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {event.title}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {event.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="medium">📍 {event.location}</Button>
            <Button size="medium">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
}

export default EventCards;