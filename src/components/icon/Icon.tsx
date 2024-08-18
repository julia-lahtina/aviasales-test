import { Link } from 'react-router-dom'
import s from './Icon.module.scss'

export const Icon = () => {
    return (
        <div className={s.logoPosition}>
            <Link to="/main-page">
                <img className={s.logo} src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Aviasales_logo.png" alt="aviasales logo" />
            </Link>
        </div>
    )
}