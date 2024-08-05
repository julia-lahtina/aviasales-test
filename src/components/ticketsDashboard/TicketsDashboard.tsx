import { TicketsWithButtons } from "./tickets/TicketsWithButtons"
import { FlightTransitions } from "./flightTransitions/FlightTransitions"
import s from './TicketsDashboard.module.scss'
import { Container } from "../container/Container"

export const TicketsDashboard = () => {
    return (
        <Container>
            <div className={s.dashboard}>
                <FlightTransitions />
                <TicketsWithButtons />
            </div>
        </Container>

    )
}