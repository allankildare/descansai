import { CompletedChallenges } from "../components/CompletedChallenges/CompletedChallenges";
import { CountDown } from "../components/CountDown/CountDown";
import { ExperienceBar } from "../components/ExperienceBar/ExperienceBar";
import { Profile } from "../components/Profile/Profile";
import Head from 'next/head'
import style from './Home.module.css'
import { ChallengeBox } from "../components/ChallengeBox/ChallengeBox";

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Início | Descansaí</title>
      </Head>
      <ExperienceBar/>
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <CountDown />
        </div>
        <div>
          <ChallengeBox/>
        </div>
      </section>
      </div>
  )
}
