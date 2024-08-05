import s from './Icon.module.scss'

export const Icon = () => {
    return (
        <div className={s.logoPosition}>
            <img className={s.logo} src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Aviasales_logo.png" alt="aviasales logo" />
        </div>
    )
}