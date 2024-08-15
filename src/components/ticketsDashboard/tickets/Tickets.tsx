import { TicketI } from "./ticket/Ticket"
import { useTypedSelector } from "../../../hooks/useTypedSelector"
import { useGetTicketsQuery } from "../../../services/api"
import { useDispatch } from "react-redux"
import { setTickets } from "../../../features/ticketsSlice"


export const Tickets = () => {

    const { isLoading, data } = useGetTicketsQuery()
    console.log(data)

    const tickets = useTypedSelector(state => state.tickets)
    console.log(tickets)



    return (
        <div>
            {data?.map(ticket => {
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