import { useState } from 'react'
import '../styles/global.css'
import { ChallengeContext } from '../contexts/ChallengesContext'

function MyApp({ Component, pageProps }) {
  const [level, setLevel] = useState(1)

  function levelUp() {
    setLevel(level + 1)
  }
  return (
    <ChallengeContext.Provider value={{ level, levelUp}}>
      <Component {...pageProps} />
    </ChallengeContext.Provider>
  )
}

export default MyApp
