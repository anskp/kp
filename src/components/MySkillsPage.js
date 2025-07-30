import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
min-height: 100vh;
position: relative;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
padding: 4rem 2rem;
gap: 2rem;
`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 280px;
min-height: 320px;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.accent};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
margin-bottom: 1rem;

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: 0.9rem;
padding: 0.5rem 0;
margin-bottom: 0.5rem;

${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    display: block;
}
ul,p{
    margin-left: 1rem;
    margin-top: 0.5rem;
}
`

const MySkillsPage = () => {
    return (
        <Box>

<LogoComponent />
<SocialIcons />
<PowerButton />
<ParticleComponent theme='light' />
            <Main>
<Title>
    <Design width={40} height={40} /> Cybersecurity
</Title>
<Description>
I specialize in protecting digital systems and networks from cyber threats.
</Description>
<Description>
<strong>Skills</strong>
<p>
Network Security, Ethical Hacking, Cryptography, Penetration Testing
</p>
</Description>
<Description>
<strong>Tools</strong>
<p>
Wireshark, Metasploit, Burp Suite, Kali Linux
</p>
</Description>

            </Main>
            <Main>
<Title>
    <Develope width={40} height={40} /> Full Stack Development
</Title>
<Description>
I build complete web applications from frontend to backend with modern technologies.
</Description>
<Description>
<strong>Skills</strong>
<p>
React, Node.js, MongoDB, Express, TypeScript, REST APIs
</p>
</Description>
<Description>
<strong>Tools</strong>
<p>
VSCode, Git, Docker, AWS, Postman
</p>
</Description>

            </Main>
            <Main>
<Title>
    <Design width={40} height={40} /> Blockchain Development
</Title>
<Description>
I develop decentralized applications and smart contracts for the Web3 ecosystem.
</Description>
<Description>
<strong>Skills</strong>
<p>
Solidity, Smart Contracts, Web3.js, DeFi, NFT Development
</p>
</Description>
<Description>
<strong>Tools</strong>
<p>
Hardhat, Remix, MetaMask, Truffle, Ganache
</p>
</Description>

            </Main>
            <Main>
<Title>
    <Develope width={40} height={40} /> AI & Machine Learning
</Title>
<Description>
I create intelligent systems and models using cutting-edge AI technologies.
</Description>
<Description>
<strong>Skills</strong>
<p>
Python, TensorFlow, PyTorch, Deep Learning, Neural Networks
</p>
</Description>
<Description>
<strong>Tools</strong>
<p>
Jupyter, Scikit-learn, OpenCV, Google Colab, MLflow
</p>
</Description>

            </Main>

            <BigTitle text="SKILLS" top="90%" right="30%" />

        </Box>
        
    )
}

export default MySkillsPage
