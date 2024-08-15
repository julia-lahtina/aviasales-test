import { Button } from "../../buttons/button/Button"
import { Buttons } from "../../buttons/Buttons"
import { Tickets } from "./Tickets"
import s from './TicketsWithButtons.module.scss'

export const TicketsWithButtons = () => {
    return (
        <div className={s.ticketWithButtonsWrap}>
            <Buttons />
            <div>
                <Tickets />
            </div>
            <Button title="ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!" onClick={() => alert('tickets')} />
        </div>
    )
}