import { TicketI } from "./ticket/Ticket"
import { useGetTicketsQuery } from "../../../services/api"
import { useTypedSelector } from "../../../hooks/useTypedSelector"


export const Tickets = () => {

    const { isLoading, data } = useGetTicketsQuery()
    console.log('data: ', data)

    const tickets = useTypedSelector(state => state.tickets.tickets)
    console.log('tickets', tickets)

    return (
        <div>
            {tickets?.map(ticket => {
                return (
                    <TicketI
                        outboundFlightDuration={ticket.outboundFlightDuration}
                        departureTime={ticket.departureTime}
                        price={ticket.price}
                        transitions={ticket.transitions}
                        departureAirport={ticket.departureAirport}
                        transitionPlace={ticket.transitionPlace}
                        key={ticket.id}
                        arrivalAirport={ticket.arrivalAirport}
                        arrivalTime={ticket.arrivalTime}
                        returnFlightDuration={ticket.returnFlightDuration}
                        id={ticket.id}
                    />
                )
            })}
        </div>
    )
}