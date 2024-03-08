import React from 'react';
import { Layout } from '../layout/Layout';
import { Section, LeftSection, SectionTitle, SectionText } from '../styles/GlobalComponents';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import Streak from '../components/Streak/Streak';
import { lineChartData } from '../constants/constants';

const colors = ['#3f51b5', '#ff9800', '#2196f3'];

const ProfilePage = () => {
    return (
        <Layout>
            <Section grid>
                <LeftSection>
                    <SectionTitle main center>
                        Your Progress
                    </SectionTitle>
                    <br></br>
                    <SectionText>
                        Congratulations, you're getting better! 🎉🥳<br></br><br></br>
                    </SectionText>
                    <br></br><br></br>
                    <LineChart width={600} height={300} data={lineChartData}>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="score" stroke={colors[0]} name="Total" />
                        <Line type="monotone" dataKey="algoPerformance" stroke={colors[1]} name="Algo Perf" />
                        <Line type="monotone" dataKey="cleanCode" stroke={colors[2]} name="Clean Code" />
                    </LineChart>
                    <br></br><br></br>
                    <SectionText>
                        <br></br>
                        Here you can evaluate your monthly progress from the CodeCrusades. But remember, what counts is your learning, not the numbers ❤️
                    </SectionText>
                </LeftSection>
                <Streak></Streak>
            </Section>
        </Layout>
    );
};

export default ProfilePage;
