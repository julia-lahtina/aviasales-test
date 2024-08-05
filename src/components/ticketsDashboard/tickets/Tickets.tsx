import { Ticket } from "./ticket/Ticket"

const flights = [
    {
        id: 1,
        price: '13 400 P',
        startFlightPlace: 'MOW - HKT',
        flightTime: '10:45 - 08:00',
        flightDuration: '21ч 15м',
        quantityOfTransfers: '2 пересадки',
        transferPlace: 'HKG, JNB'
    },
    {
        id: 2,
        price: '14 600 P',
        startFlightPlace: 'MOW - HKT',
        flightTime: '10:45 - 08:00',
        flightDuration: '19ч 15м',
        quantityOfTransfers: '1 пересадки',
        transferPlace: 'HKG, JNB'
    },
    {
        id: 3,
        price: '15 400 P',
        startFlightPlace: 'MOW - HKT',
        flightTime: '10:45 - 08:00',
        flightDuration: '15ч 15м',
        quantityOfTransfers: '0 пересадки',
        transferPlace: 'HKG, JNB'
    },
    {
        id: 4,
        price: '10 400 P',
        startFlightPlace: 'MOW - HKT',
        flightTime: '10:45 - 08:00',
        flightDuration: '23ч 15м',
        quantityOfTransfers: '2 пересадки',
        transferPlace: 'HKG, JNB'
    },
    {
        id: 5,
        price: '10 400 P',
        startFlightPlace: 'MOW - HKT',
        flightTime: '10:45 - 08:00',
        flightDuration: '22ч 15м',
        quantityOfTransfers: '3 пересадки',
        transferPlace: 'HKG, JNB'
    },

]

export const Tickets = () => {
    return (
        <div>
            {flights.map(f => {
                return (
                    <Ticket
                        flightDuration={f.flightDuration}
                        flightTime={f.flightTime}
                        price={f.price}
                        quantityOfTransfers={f.quantityOfTransfers}
                        startFlightPlace={f.startFlightPlace}
                        transferPlace={f.transferPlace}
                        key={f.id}
                    />
                )
            })}
        </div>
    )
}