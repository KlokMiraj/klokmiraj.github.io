import {useState,useEffect} from "react";
import { Section, SectionDivider, SectionTitle } from "../../styles/GlobalComponents";
import { GridContainer, HeaderThree, Tag, TitleContent } from "../Projects/ProjectsStyles";
import Profile from "./Profiles";

function GithubApi(){
    const [items,setItems]=useState([])
    const[user]=useState("klokMiraj")

    useEffect(()=>{
        const fetchRepos=async()=>{
            const res=await fetch(
                `https://api.github.com/users/${user}/repos?per_page=6&sort=updated`
            )
            const data=await res.json()
            setItems(data)
            // console.log(data)
        }

        fetchRepos()
    },[user])

    return (
        <>

        <Section nopadding id='projects'>
            <SectionDivider/>
       
        <SectionTitle>
            <HeaderThree> Viewing {user}'s repositories</HeaderThree>
            </SectionTitle>
        

        <GridContainer>
            {!items ? (
          <Loading />
        ) : (
          <div>
            <TitleContent>Git Hub Profile</TitleContent>
            {items.map((item) => (
            <Profile key={item.id} {...item} />
          ))}
          </div>
        )}


        </GridContainer>
        </Section>
        
        
      </>
    )
}
export default GithubApi