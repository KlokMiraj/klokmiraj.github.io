import React from 'react';
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

// import { useEffect, useState } from 'react';

// const[githubData,setGithubData]=useState([]);
// const[githubUser,setGithubUser]=useState("klokmiraj")

// const fetchData=()=>{
//   return fetch('https://api.github.com/users/klokMiraj}')
//   .then((response)=> response.json())
//   .then((data)=>setGithubData(data));
// }

// useEffect(()=>{
//   fetchData()
// },[])

const Projects = () => (
  <div>
    <Section nopadding id='projects'>
      <SectionDivider />
      <SectionTitle>Projects</SectionTitle>
     
        <GridContainer>
        {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
          <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit}>Code</ExternalLinks>
              <ExternalLinks href={p.source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
           );
          })}
      </GridContainer>
      
    </Section>
  </div>
);

export default Projects;