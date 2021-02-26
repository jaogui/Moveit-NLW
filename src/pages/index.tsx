import Head from 'next/head';
import { CompleteChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import {GetServerSideProps} from 'next';


import Heade from 'next/head';
import styles from '../styles/pages/Home.module.css';
import { ChallangeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inicio | Moveit</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
      <section>
        <div>
          <Profile />
          <CompleteChallenges />
          <Countdown />
        </div>

        <div>
            <ChallangeBox />
        </div>
      </section>
      </CountdownProvider>
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async(ctx) =>{  
  
 const dataUser = {
   level: 1,
   currentExperience: 2,
   challengesCompleted: 2
 } 
  
const {leve, currentExperience, challengesCompleted} = ctx.req.cookies;

  return {
    props:{
     props: dataUser
    }

  }
}