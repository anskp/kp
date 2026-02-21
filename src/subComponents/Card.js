import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components';
import { Github } from '../components/AllSvgs';



const Box = styled(motion.li)`
width: 16rem;
min-height: 18rem;
background-color: ${props => props.theme.body};
color:${props => props.theme.text};
padding: 1.5rem 2rem;
margin-right: 2rem;
border-radius: 0 50px 0 50px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid ${props => props.theme.text};
transition: all 0.2s ease;

&:hover{
background-color: ${props => props.theme.accent};
color:${props => props.theme.body};
border: 1px solid ${props => props.theme.accent};

}
`
const Title = styled.h2`
font-size: calc(1em + 0.5vw);
`

const Description = styled.h2`
font-size: calc(0.8em + 0.3vw);
font-family: 'Karla',sans-serif;
font-weight: 500;
line-height: 1.4;
`
const Tags = styled.div`
border-top: 2px solid ${props =>props.theme.text};
padding-top: 0.5rem;
display:flex;
flex-wrap:wrap;
${Box}:hover &{
border-top: 2px solid ${props =>props.theme.body};
}
`
const Tag = styled.span`
margin-right:1rem;
font-size:calc(0.8em + 0.3vw);
`

const Footer = styled.footer`
display: flex;
justify-content: flex-end;
align-items: center;
gap: 0.75rem;
`

const Link = styled.a`
background-color: ${props =>props.theme.text};
color: ${props =>props.theme.body};
text-decoration: none;
padding:0.5rem calc(2rem + 2vw);
border-radius: 0 0 0 50px;
font-size:calc(1em + 0.5vw);

${Box}:hover &{
    background-color: ${props =>props.theme.secondary};
    color: ${props =>props.theme.body};

}
`

const Git = styled.a`
color: inherit;
text-decoration: none;
${Box}:hover &{
    &>*{
        fill:${props =>props.theme.body};
    }
}

`

// Framer motion configuration
const Item = {
    hidden:{
        scale:0
    },
    show:{
        scale:1,
        transition: {
            type: 'spring',
            duration: 0.5
        }
    }
}

const Card = (props) => {

    const {id, name, description, tags, demo, github} = props.data;

    return (
        <Box key={id} variants={Item}>
            <Title>{name}</Title>
            <Description>
                {description}
            </Description>
            <Tags>
            {
                    tags.map((t,id) => {
                        return <Tag key={id}>#{t}</Tag>
                    })
                }
            </Tags>
            <Footer>
                {demo ? (
                <Link href={demo} target="_blank" rel="noreferrer">
                    Visit
                </Link>
                ) : null}
                <Git  href={github}  target="_blank" rel="noreferrer">
                    <Github width={30} height={30} />
                </Git>
            </Footer>
        </Box>
    )
}

export default Card
