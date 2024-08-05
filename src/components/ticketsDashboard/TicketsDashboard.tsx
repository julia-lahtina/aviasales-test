import { TicketsWithButtons } from "./tickets/TicketsWithButtons"
import { FlightTransitions } from "./flightTransitions/FlightTransitions"
import s from './TicketsDashboard.module.scss'

export const TicketsDashboard = () => {
    return (
        <div className={s.dashboard}>
            <FlightTransitions />
            <TicketsWithButtons />
        </div>
    )
}