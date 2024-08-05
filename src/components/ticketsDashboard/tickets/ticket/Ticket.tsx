import s from './Ticket.module.scss'
import s7logo from '../../../../assets/images/S7-logo.png'

type TicketProps = {
    price: string
    startFlightPlace: string
    flightTime: string
    flightDuration: string
    quantityOfTransfers: number
    transferPlace: string
}

export const Ticket = (props: TicketProps) => {
    return (
        <div className={s.ticketWrapper}>

            <div className={s.priceLogoWrapper}>
                <span className={s.price}>{props.price}</span>
                <img className={s.s7logo} src={s7logo} alt="" />
            </div>

            <div className={s.flightDetailsWrapper}>
                <div>
                    <div>{props.startFlightPlace}</div>
                    <div>{props.flightTime}</div>
                </div>

                <div>
                    <div>в пути</div>
                    <div>{props.flightDuration}</div>
                </div>

                <div>
                    <div>{props.quantityOfTransfers} пересадки</div>
                    <div>{props.transferPlace}</div>
                </div>
            </div>
        </div>
    )
}