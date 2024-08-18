import { Checkbox } from "../../checkbox/Checkbox"
import s from './FlightTransitions.module.scss'

export const FlightTransitions = () => {
    return (
        <div className={s.transitionsWrapper}>
            <span className={s.transitionsHeader}>количество пересадок</span>
            <div className={s.checkboxWrapper}>
                <Checkbox title="Все" value={'Все'} />
                <Checkbox title="Без пересадок" value={'Без пересадок'} />
                <Checkbox title="1 пересадка" value={'1 пересадка'} />
                <Checkbox title="2 пересадки" value={'2 пересадки'} />
                <Checkbox title="3 пересадки" value={'3 пересадки'} />
            </div>
        </div>
    )
}