import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengeContext)

    return (
        <div className={ styles.profileContainer }>
            <img src="https://github.com/evertonnatan.png" alt="Avatar de Everton"/>
        <div>
            <strong>Everton Natan</strong>
            <p>
                <img src="icons/level.svg" alt="ícone do level"/>
                Level { level }</p>
        </div>
        </div>
    )
}