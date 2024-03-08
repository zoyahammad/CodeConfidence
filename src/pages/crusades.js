import React from 'react';
import { Layout } from '../layout/Layout';
import { Section, LeftSection, SectionTitle, SectionText, SectionSubText } from '../styles/GlobalComponents';
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import Leaderboard from '../components/Leaderboard/Leaderboard';
import Button from '@mui/material/Button';

const CrusadesPage = () => {
  return (
    <Layout>
      <Section grid>
        <LeftSection>
          <SectionTitle main center>
            Code Crusades  &#x1F680;
          </SectionTitle>
          <SectionText>
            Feeling unsure about coding? We provide you a safe space for learning and climbing up the tech ladder. Our weekly crusades are fun coding challenges designed for beginners and beyond. Solve real-world inspired problems, build skills, and boost your tech confidence one challenge at a time.
          </SectionText>
        </LeftSection>
        <Leaderboard></Leaderboard>
      </Section>
      <Section grid>
        <SectionTitle main center>
          Weekly Challenge
        </SectionTitle>
        <br />
        <SectionSubText>
          This week's challenge: Practice loops and conditional statements by writing a program that prints numbers from 1 to 100, but instead of the number, it prints "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both!
        </SectionSubText>
        <br />
        <CodeMirror
          value={"console.log('Hello World')"}
          height="100px"
          width="700px"
          language="javascript"
          theme={vscodeDark}
        />
        <br /><br /><br /><br /><br /><br /><br />
        <Button variant="outlined">Submit</Button>
        <br />
        <SectionTitle main center>
          Past Challenges
        </SectionTitle>
        <br />
        <SectionSubText>
          Feb 2024: Write a program that prompts the user for different words (nouns, verbs, adjectives), and then uses them to create a silly story template.
        </SectionSubText>
      </Section>
    </Layout>
  );
};

export default CrusadesPage;
