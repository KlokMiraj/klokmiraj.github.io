import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <div>
    <Section id='tech'>
      <SectionTitle>
        Skills
      </SectionTitle>
      <SectionText>
        Skills that I'm fimiliar with
      </SectionText>
      <SectionDivider>
      
      </SectionDivider>
      <List>
        <ListItem>
          <DiFirebase size="3rem"/>
          <ListContainer>
            <ListTitle>
              Front End
            </ListTitle>
            <ListParagraph>
              Experience with <br/>
              React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem"/>
          <ListContainer>
            <ListTitle>
              Back-end
            </ListTitle>
            <ListParagraph>
              Experience with <br/>
              Node.js <br/>
              SQL <br/>
              API Development<br/>
              Cloud Server <br/>
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem"/>
          <ListContainer>
            <ListTitle>
              Data Engineering
            </ListTitle>
            <ListParagraph>
              Azure <br/>
              Python <br/>
              ETL <br/>
              Databricks<br/>
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
      </Section>
  </div>
);

export default Technologies;
