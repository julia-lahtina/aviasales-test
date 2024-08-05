import { Buttons } from "../../buttons/Buttons"
import { Tickets } from "./Tickets"
import s from './TicketsWithButtons.module.scss'

export const TicketsWithButtons = () => {
    return (
        <div className={s.ticketWithButtonsWrap}>
            <Buttons />
            <Tickets />
        </div>
    )
}