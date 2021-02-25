import Head from 'next/head';
import { CompleteChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";

import Heade from 'next/head';
import styles from '../styles/pages/Home.module.css';
import { ChallangeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
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
