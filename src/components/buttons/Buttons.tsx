import { useDispatch } from "react-redux"
import { sortTickets } from "../../features/ticketsSlice"
import { Button } from "./button/Button"
import s from './Buttons.module.scss'

export const Buttons = () => {
    const dispatch = useDispatch()

    return (
        <div className={s.buttonWrap}>
            <Button title="самый дешевый" onClick={() => dispatch(sortTickets('asc'))} />
            <Button title="самый быстрый" onClick={() => alert('ji')} />
            <Button title="оптимальный" onClick={() => alert('ji')} />
        </div>
    )
}