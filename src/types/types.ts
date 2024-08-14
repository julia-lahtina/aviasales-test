export type Ticket = {
    id: null | number
    price: null | number
    departureTime: string
    departureAirport: string
    arrivalTime: string
    arrivalAirport: string
    outboundFlightDuration: string
    returnFlightDuration: string
    transitionPlace: string
    transitions: null | number
  }

  export type Tickets = {
    tickets: Ticket[]
  }