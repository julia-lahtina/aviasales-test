import s from './Ticket.module.scss'
import s7logo from '../../../../assets/images/S7-logo.png'
import { Ticket } from '../../../../types/types'


export const TicketI = (props: Ticket) => {
    return (
        <div className={s.ticketWrapper}>

            <div className={s.priceLogoWrapper}>
                <span className={s.price}>{props.price}</span>
                <img className={s.s7logo} src={s7logo} alt="" />
            </div>

            <div className={s.flightDetailsWrapper}>
                <div>
                    <div>{props.departureAirport}</div>
                    <div>{props.departureTime}</div>
                </div>

                <div>
                    <div>в пути</div>
                    <div>{props.outboundFlightDuration}</div>
                </div>

                <div>
                    <div>{props.transitions} пересадки</div>
                    <div>{props.transitionPlace}</div>
                </div>
            </div>
        </div>
    )
}