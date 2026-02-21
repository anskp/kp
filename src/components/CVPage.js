import React from "react";
import styled from "styled-components";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import BackButton from "../subComponents/BackButton";
import BigTitle from "../subComponents/BigTitlte";
import { Blogs } from "../data/BlogData";
import { SelectedProjects } from "../data/WorkData";

const skills = [
  {
    title: "Cybersecurity",
    items: [
      "Network Security",
      "Ethical Hacking",
      "Cryptography",
      "Penetration Testing",
      "Wireshark",
      "Metasploit",
      "Burp Suite",
      "Kali Linux",
    ],
  },
  {
    title: "Full Stack Development",
    items: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "TypeScript",
      "REST APIs",
      "Docker",
      "AWS",
    ],
  },
  {
    title: "Blockchain Development",
    items: [
      "Solidity",
      "Smart Contracts",
      "Web3.js",
      "DeFi",
      "NFT Development",
      "Hardhat",
      "Remix",
      "MetaMask",
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Deep Learning",
      "Neural Networks",
      "Scikit-learn",
      "OpenCV",
      "MLflow",
    ],
  },
];

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  min-height: 100vh;
  position: relative;
  padding: 7.5rem 1rem 2rem 1rem;
`;

const Resume = styled.main`
  width: min(1150px, calc(100vw - 6rem));
  margin: 0 auto;
  border: 2px solid ${(props) => props.theme.text};
  background-color: rgba(${(props) => props.theme.bodyRgba}, 0.94);
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1000px) {
    grid-template-columns: 0.95fr 1.35fr;
  }

  @media print {
    width: 100%;
    border: 1px solid #000;
    background: #fff;
  }
`;

const Sidebar = styled.section`
  border-right: 0;
  border-bottom: 2px solid ${(props) => props.theme.text};
  padding: 1.5rem;

  @media (min-width: 1000px) {
    border-right: 2px solid ${(props) => props.theme.text};
    border-bottom: 0;
  }
`;

const Content = styled.section`
  padding: 1.5rem;
`;

const Name = styled.h1`
  font-size: clamp(1.7rem, 2.8vw, 2.4rem);
  color: ${(props) => props.theme.text};
  margin-bottom: 0.4rem;
`;

const Role = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 1rem;
  margin-bottom: 1.2rem;
  line-height: 1.5;
`;

const Section = styled.section`
  margin-bottom: 1.2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  color: ${(props) => props.theme.text};
  text-transform: uppercase;
  letter-spacing: 0.06rem;
  margin-bottom: 0.45rem;
`;

const Paragraph = styled.p`
  color: ${(props) => props.theme.text};
  line-height: 1.6;
`;

const List = styled.ul`
  margin: 0;
  padding-left: 1rem;
  color: ${(props) => props.theme.text};
  line-height: 1.5;
`;

const Item = styled.li`
  margin-bottom: 0.35rem;
`;

const LinkList = styled.ul`
  margin: 0;
  padding-left: 1rem;
  line-height: 1.6;
`;

const LinkItem = styled.li`
  color: ${(props) => props.theme.text};
`;

const ExternalLink = styled.a`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  border-bottom: 1px dashed ${(props) => props.theme.text};
`;

const SkillBlock = styled.div`
  margin-bottom: 0.75rem;
`;

const SkillTitle = styled.h3`
  font-size: 0.95rem;
  color: ${(props) => props.theme.text};
  margin-bottom: 0.35rem;
`;

const SkillsText = styled.p`
  color: ${(props) => props.theme.text};
  line-height: 1.5;
`;

const CVPage = () => {
  const education = Blogs.filter((blog) => blog.id <= 3);
  const training = Blogs.filter((blog) => blog.id > 3);

  return (
    <Box>
      <LogoComponent />
      <BackButton />
      <PowerButton />
      <SocialIcons />

      <Resume>
        <Sidebar>
          <Name>Moh'd Anas KP</Name>
          <Role>
            Software Engineer focused on AI, Web3, cybersecurity, and full-stack
            product development.
          </Role>

          <Section>
            <SectionTitle>Profile</SectionTitle>
            <Paragraph>
              I am a software engineer exploring the full spectrum of modern
              tech, from securing systems in cybersecurity to building
              decentralized apps in blockchain development, crafting end-to-end
              solutions as a full-stack developer, and experimenting with
              cutting-edge AI models.
            </Paragraph>
          </Section>

          <Section>
            <SectionTitle>Links</SectionTitle>
            <LinkList>
              <LinkItem>
                <ExternalLink href="https://github.com/anskp" target="_blank" rel="noreferrer">
                  github.com/anskp
                </ExternalLink>
              </LinkItem>
              <LinkItem>
                <ExternalLink href="https://x.com/anskpp" target="_blank" rel="noreferrer">
                  x.com/anskpp
                </ExternalLink>
              </LinkItem>
              <LinkItem>
                <ExternalLink
                  href="https://www.facebook.com/anas.kp.236861/"
                  target="_blank"
                  rel="noreferrer"
                >
                  facebook.com/anas.kp.236861
                </ExternalLink>
              </LinkItem>
              <LinkItem>
                <ExternalLink href="https://youtube.com" target="_blank" rel="noreferrer">
                  youtube.com
                </ExternalLink>
              </LinkItem>
            </LinkList>
          </Section>
        </Sidebar>

        <Content>
          <Section>
            <SectionTitle>Skills</SectionTitle>
            {skills.map((skill) => (
              <SkillBlock key={skill.title}>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillsText>{skill.items.join(", ")}</SkillsText>
              </SkillBlock>
            ))}
          </Section>

          <Section>
            <SectionTitle>Education</SectionTitle>
            <List>
              {education.map((item) => (
                <Item key={item.id}>
                  <strong>{item.name}</strong> ({item.date}) - {item.tags.join(", ")}
                </Item>
              ))}
            </List>
          </Section>

          <Section>
            <SectionTitle>Courses & Training</SectionTitle>
            <List>
              {training.map((item) => (
                <Item key={item.id}>
                  <strong>{item.name}</strong> ({item.date}) - {item.tags.join(", ")}
                </Item>
              ))}
            </List>
          </Section>

          <Section>
            <SectionTitle>Selected Projects</SectionTitle>
            <List>
              {SelectedProjects.map((project) => (
                <Item key={project.id}>
                  <strong>{project.name}</strong> - {project.description}
                </Item>
              ))}
            </List>
          </Section>
        </Content>
      </Resume>

      <BigTitle text="CV" top="5rem" left="5rem" />
    </Box>
  );
};

export default CVPage;
