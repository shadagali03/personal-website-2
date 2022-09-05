import React, { useRef } from 'react'
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import {DiJava, DiReact, DiGit} from 'react-icons/di'
import {AiOutlineHtml5} from 'react-icons/ai'
import IconContainer from './IconContainer';
import {TbBrandJavascript, TbBrandCss3, TbBrandPython} from 'react-icons/tb'
import {BsBootstrap} from 'react-icons/bs'
import {SiAzuredevops} from 'react-icons/si'
import {BiData, BiWorld} from 'react-icons/bi'
import MediaCard from './MediaCard';
import ContactMe from './ContactMe';
import TypingAnimation from './TypingAnimation';
import Experience from './Experience';


function Intro() {
  return (
    <IntroContainer>
        <TextContainer>
            <h1>Hi, I'm Sarang Hadagali</h1>
            <InnerTextContinaer>
                <h2>Aspiring Software Developer and Avid Learner</h2>
            </InnerTextContinaer>
            <TypingAnimation />
            <ImageContainer>
                <img src='https://media-exp1.licdn.com/dms/image/C5603AQG2jzof32QjmA/profile-displayphoto-shrink_400_400/0/1657126247893?e=1667433600&v=beta&t=CKeiJF3DYFBXDGQELQrursVE4UfBAcEI7fnUt8XMLFE' />
            </ImageContainer>
            <ContactMe />
            <TechnologyContainer>
                <h3>Technologies and Tools</h3>
                <p>
                    Here are some of the technologies and tools that I have used and am comfortble with!
                </p>
                <Stack 
                    direction='row' 
                    spacing={4}
                    justifyContent='center'
                >
                    <IconContainer iconVal={<DiJava size='4em'/>} text='Java' />
                    <IconContainer iconVal={<TbBrandPython size='4em'/>} text='Python' />
                    <IconContainer iconVal={<AiOutlineHtml5 size='4em'/>} text='HTML' />
                    <IconContainer iconVal={<TbBrandJavascript size='4em'/>} text='JavaScript' />
                    <IconContainer iconVal={<TbBrandCss3 size='4em'/>} text='CSS' />
                </Stack>
                <Stack 
                    direction='row' 
                    spacing={4}
                    justifyContent='center'
                    marginTop={3}
                >
                    <IconContainer iconVal={<DiReact size='4em'/>} text='React' />
                    <IconContainer iconVal={<BsBootstrap size='4em'/>} text='Bootstrap' />
                    <IconContainer iconVal={<DiGit size='4em'/>} text='Git' />
                    <IconContainer iconVal={<SiAzuredevops size='4em'/>} text='Azure' />
                    <IconContainer iconVal={<BiData size='4em'/>} text='Firebase' />
                </Stack>
            </TechnologyContainer>
            <Experience />
            <h3>My Portfolio</h3>
            <PortfolioContainer>
                <MediaCard 
                myimage='https://optinmonster.com/wp-content/uploads/2017/10/best-website-builder-for-small-business-min.png' 
                altText='portfolio' 
                projectName='Personal Portfolio' 
                description='Created a personal website using React to display resume in a more elegant format for people to visit and learn more about me!'
                myUrl='https://github.com/shadagali03/personal-website-2'
                />

                
                <MediaCard 
                myimage='https://i.insider.com/61e6e0067c6a200018425fef?width=1136&format=jpeg' 
                altText='wordleLogo' 
                projectName='Friendles' 
                description='Developed a Wordle Clone that allows for friends to send their own custom words with eachother as well as practice by themselves with random generated words'
                myUrl='https://github.com/shadagali03/Friendle2'
                />
                <MediaCard 
                myimage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW1uPx_neASw4Nz6F7iObO4GEpVi9uYc3NPqC48vY0AA&s' 
                altText='FindFoodFast' 
                projectName='Find Food Fast' 
                description='Created a website that takes multiple keywords and returns a random restaurant based of matching keywords, perfect for indecisive couples!'
                myUrl={'https://github.com/shadagali03/Find-Food_Fast'}
                />
                <MediaCard 
                myimage='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgc6qkj_WlIXaKCFTiYiV9OJzH0hlxEGA3lw&usqp=CAU' 
                altText='Barchart' 
                projectName='Covid Animated Barchart' 
                description='Developed an animated bar chart using python to display details based of country of covid statistics'
                myUrl={'https://github.com/shadagali03/Covid-Barchart'}
                />
            </PortfolioContainer>
        </TextContainer>
    </IntroContainer>
  )
}

export default Intro;

const IntroContainer = styled.div`
    display: flex;
    justify-content: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;


const TextContainer = styled.div`
    text-align: center;
    > h1 {
        margin-top: 20px;
        margin-bottom: 0px;
    }
`;

const InnerTextContinaer = styled.div`
`;

const MovingText = styled.div``;

const ImageContainer = styled.div`
    padding: 20px;
    > img {
        width: 150px;
        height: 150px;
    }
`;

const TechnologyContainer = styled.div`
    margin-top: 50px;
    > h3 {
        font-size: larger;
    }
    > p {
        font-size: smaller;
        margin-bottom: 30px;
    }
`;

const PortfolioContainer = styled.div`
    justify-content: space-evenly;
    flex-wrap: wrap;
    > h3 {
        text-align: center;
    }
    display: flex;
    margin-top: 50px;
    .cont {
        padding: 5px;
    }
`;
