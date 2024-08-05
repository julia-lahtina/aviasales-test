import { Container } from "./container/Container"
import { Icon } from "./icon/Icon"
import { TicketsDashboard } from "./ticketsDashboard/TicketsDashboard"

export const TicketsPage = () => {
    return (
        <Container>
            <Icon />
            <TicketsDashboard />
        </Container>
    )
}