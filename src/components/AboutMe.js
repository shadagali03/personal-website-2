import React from 'react'
import styled from 'styled-components';
import Socials from './Socials';

function AboutMe() {
  return (
    <AboutContainer>
        <AboutTitle>
            <h3>
                About Me
                <br />
            </h3>
        </AboutTitle>
        <AboutContent>
            <p>
                Hello! Thank you for taking the time to check my page out. My name is Sarang Hadagali
                and I am a sophomore at Stevens Institute of Technology. I am majoring in computer science and minoring in quantitative finance.
                A lot of my focus and time spent has been directed towards front-end developement, however, as time goes on I want to start creating
                and building my own algorithmic trading bot to learn more about the finance field and couple it with my quantitative finance minor. 
                Aside from software developement I love spending time with friends, playing poker or playing pickleball.

            </p>
        </AboutContent>
        <Socials mycolor={'white'}/>
    </AboutContainer>
  )
}

export default AboutMe;

const AboutContainer = styled.div`
    background-color: black ;
    padding: 20px;
`;

const AboutTitle = styled.div`
    color: white;
    margin-left: 80px;

    > h3 {
        margin-top: 0px;
    }
`;

const AboutContent = styled.div`
    margin-left: 80px;
    margin-right: 80px;
    > p {
        color: white;
    }
`;

