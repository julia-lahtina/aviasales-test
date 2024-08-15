export type Ticket = {
    id: number
    price: number
    departureTime: string
    departureAirport: string
    arrivalTime: string
    arrivalAirport: string
    outboundFlightDuration: string
    returnFlightDuration: string
    transitionPlace: string
    transitions: number
  }

  export type Tickets = Ticket[]
  