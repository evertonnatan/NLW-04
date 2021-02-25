import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={ styles.profileContainer }>
            <img src="https://github.com/evertonnatan.png" alt="Avatar de Everton"/>
        <div>
            <strong>Everton Natan</strong>
            <p>
                <img src="icons/level.svg" alt="ícone do level"/>
                Level 1</p>
        </div>
        </div>
    )
}