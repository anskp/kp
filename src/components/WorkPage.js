import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { lightTheme } from "./Themes";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import BackButton from "../subComponents/BackButton";
import { WorkCategories } from "../data/WorkData";
import { YinYang } from "./AllSvgs";
import BigTitlte from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  min-height: 100vh;
  position: relative;
  padding: 8rem 1rem 3rem 1rem;
`;

const Category = styled.section`
  width: 100%;
  border: 2px solid ${(props) => props.theme.text};
  background-color: rgba(${(props) => props.theme.bodyRgba}, 0.96);
  border-radius: 0 1.5rem 0 1.5rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  scroll-margin-top: 10rem;
`;

const CategoryTitle = styled.h2`
  font-size: clamp(1rem, 2.2vw, 1.4rem);
  color: ${(props) => props.theme.text};
  border-bottom: 1px solid ${(props) => props.theme.text};
  padding-bottom: 0.6rem;
`;

const RepoList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.65rem;

  @media (min-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const RepoItem = styled.li`
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 0.5rem;
  padding: 0.65rem 0.75rem;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => props.theme.accent};
    border-color: ${(props) => props.theme.accent};
  }
`;

const RepoName = styled.a`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  font-weight: 600;
  word-break: break-word;

  ${RepoItem}:hover & {
    color: ${(props) => props.theme.body};
  }
`;

const TagRow = styled.div`
  margin-top: 0.4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`;

const Tag = styled.span`
  font-size: 0.72rem;
  border: 1px solid ${(props) => props.theme.text};
  padding: 0.1rem 0.35rem;
  border-radius: 999px;

  ${RepoItem}:hover & {
    color: ${(props) => props.theme.body};
    border-color: ${(props) => props.theme.body};
  }
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;

  @media (max-width: 700px) {
    width: 56px;
    height: 56px;
    right: 0.75rem;
    bottom: 0.75rem;
  }
`;

const Content = styled.main`
  width: min(1200px, 100%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CategoryTabs = styled.nav`
  position: sticky;
  top: 6.25rem;
  z-index: 4;
  display: flex;
  gap: 0.6rem;
  overflow-x: auto;
  padding: 0.3rem;
  border-radius: 999px;
  background-color: rgba(${(props) => props.theme.bodyRgba}, 0.9);
  border: 1px solid ${(props) => props.theme.text};
  -webkit-overflow-scrolling: touch;
`;

const TabButton = styled.button`
  border: 1px solid ${(props) => props.theme.text};
  background: ${(props) =>
    props.$active ? props.theme.accent : `rgba(${props.theme.bodyRgba}, 0.8)`};
  color: ${(props) => (props.$active ? props.theme.body : props.theme.text)};
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  padding: 0.45rem 0.9rem;
  flex: 0 0 auto;
`;

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const WorkPage = () => {
  const yinYangRef = useRef(null);
  const sectionRefs = useRef({});
  const [activeCategory, setActiveCategory] = useState(WorkCategories[0]?.id ?? null);

  useEffect(() => {
    const rotate = () => {
      if (yinYangRef.current) {
        yinYangRef.current.style.transform = `rotate(${-window.pageYOffset}deg)`;
      }
    };

    rotate();
    window.addEventListener("scroll", rotate);
    return () => window.removeEventListener("scroll", rotate);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const current = WorkCategories.find((category) => {
        const section = sectionRefs.current[category.id];
        if (!section) return false;
        const bounds = section.getBoundingClientRect();
        return bounds.top <= 160 && bounds.bottom >= 160;
      });
      if (current) setActiveCategory(current.id);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderCategory = (category) => (
    <Category
      key={category.id}
      id={`category-${category.id}`}
      ref={(element) => {
        sectionRefs.current[category.id] = element;
      }}
    >
      <CategoryTitle>{category.title}</CategoryTitle>
      <RepoList>
        {category.projects.map((project) => (
          <RepoItem key={project.id}>
            <RepoName href={project.github} target="_blank" rel="noreferrer">
              {project.name}
            </RepoName>
            <TagRow>
              {project.tags.map((tag) => (
                <Tag key={`${project.id}-${tag}`}>#{tag}</Tag>
              ))}
            </TagRow>
          </RepoItem>
        ))}
      </RepoList>
    </Category>
  );

  return (
    <Box>
      <LogoComponent />
      <BackButton />
      <SocialIcons />
      <PowerButton />

      <Content>
        <CategoryTabs aria-label="Work categories">
          {WorkCategories.map((category) => (
            <TabButton
              key={category.id}
              $active={activeCategory === category.id}
              onClick={() => {
                const section = sectionRefs.current[category.id];
                if (section) {
                  section.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
            >
              {category.title}
            </TabButton>
          ))}
        </CategoryTabs>

        <Categories>{WorkCategories.map(renderCategory)}</Categories>
      </Content>

      <Rotate ref={yinYangRef}>
        <YinYang width={80} height={80} fill={lightTheme.secondary} />
      </Rotate>

      <BigTitlte text="WORK" top="10%" right="20%" />
    </Box>
  );
};

export default WorkPage;
