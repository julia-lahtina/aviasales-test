import { Checkbox } from "../../checkbox/Checkbox"
import s from './FlightTransitions.module.scss'

export const FlightTransitions = () => {
    return (
        <div className={s.transitionsWrapper}>
            <span className={s.transitionsHeader}>количество пересадок</span>
            <div className={s.checkboxWrapper}>
                <Checkbox title="Все" />
                <Checkbox title="Без пересадок" />
                <Checkbox title="1 пересадка" />
                <Checkbox title="2 пересадки" />
                <Checkbox title="3 пересадки" />
            </div>
        </div>
    )
}