import React from 'react'
import styled, { keyframes } from 'styled-components'
import {lightTheme} from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =  styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
 backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
`




const AboutPage = () => {
    return (
        <Box>

<LogoComponent />
<SocialIcons />
<PowerButton />
<ParticleComponent theme='light' />

        <Spaceman>
            <img src={astronaut} alt="spaceman" />
        </Spaceman>    
        <Main>
        I’m a software engineer exploring the full spectrum of modern tech — from securing systems in cybersecurity, to building decentralized apps in blockchain development, crafting end-to-end solutions as a full-stack dev, and experimenting with cutting-edge AI models. 
<br /> <br/>
I’m driven by curiosity, innovation, and the thrill of turning ideas into reality across multiple domains.
<br/> <br/>
Whether it’s scaling web apps, locking down infrastructure, or training intelligent agents — I’m all in.        </Main>
        <BigTitle text="ABOUT" top="10%" left="5%" />


        </Box>
        
    )
}

export default AboutPage
