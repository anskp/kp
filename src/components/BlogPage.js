import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons  from '../subComponents/SocialIcons'
import PowerButton  from '../subComponents/PowerButton'

import {Blogs} from '../data/BlogData';
import BlogComponent from './BlogComponent'
import AnchorComponent from '../subComponents/Anchor'
import BigTitle from "../subComponents/BigTitlte"
import { motion } from 'framer-motion'


const MainContainer = styled(motion.div)`
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
background-position: center;
`
const Container = styled.div`
background-color: ${props => props.theme.body};
width: 100%;
height:auto;

position: relative;
padding-bottom: 5rem;
`

const Center = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 10rem;
`

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
grid-gap: calc(1rem + 2vw);
`

const SectionHeading = styled.h2`
color: ${props => props.theme.text};
font-size: calc(2rem + 2vw);
font-family: 'Karla', sans-serif;
font-weight: 700;
text-align: center;
margin: 3rem 0 2rem 0;
grid-column: 1 / -1;
`

// Framer-motion config
const container = {

    hidden: {opacity:0},
    show: {
      opacity:1,
  
      transition:{
        staggerChildren: 0.5,
        duration: 0.5,
      }
    }
  
  }

const BlogPage = () => {

    const [numbers, setNumbers] = useState(0);

    useEffect(() => {
        let num = (window.innerHeight - 70)/30;
        setNumbers(parseInt(num));
    }, [])


    return (
        <MainContainer
        variants={container}
        initial='hidden'
        animate='show'
        exit={{
            opacity:0, transition:{duration: 0.5}
        }}
        >
            <Container>
                <LogoComponent />
                <PowerButton />
                <SocialIcons />
                <AnchorComponent number={numbers}/>
<Center>
<Grid>
    <SectionHeading>SCHOOL</SectionHeading>
    {Blogs.slice(0, 2).map(blog => {
        return <BlogComponent key={blog.id} blog={blog} />
    })}
    
    <SectionHeading>COLLEGE</SectionHeading>
    {Blogs.slice(2, 3).map(blog => {
        return <BlogComponent key={blog.id} blog={blog} />
    })}
    
    <SectionHeading>COURSES</SectionHeading>
    {Blogs.slice(3, 8).map(blog => {
        return <BlogComponent key={blog.id} blog={blog} />
    })}
</Grid>

</Center>
<BigTitle text="EDUCATION" top="5rem" left="5rem" />
            </Container>
        </MainContainer>
    )
}

export default BlogPage
