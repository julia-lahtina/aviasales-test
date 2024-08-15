
import { sortTickets, ticketsSlice } from '../features/ticketsSlice';
import { Ticket } from '../types/types';



describe('ticketsSlice', () => {

  const initialState: Ticket[] = [
    { 
        id: 1, 
        price: 100,
        arrivalAirport: '',
        arrivalTime: '',
        departureAirport: '',
        departureTime: '',
        outboundFlightDuration: '',
        returnFlightDuration: '',
        transitionPlace: '',
        transitions: 0
     },
     { 
        id: 2, 
        price: 200,
        arrivalAirport: '',
        arrivalTime: '',
        departureAirport: '',
        departureTime: '',
        outboundFlightDuration: '',
        returnFlightDuration: '',
        transitionPlace: '',
        transitions: 0
     },
     { 
        id: 3, 
        price: 150,
        arrivalAirport: '',
        arrivalTime: '',
        departureAirport: '',
        departureTime: '',
        outboundFlightDuration: '',
        returnFlightDuration: '',
        transitionPlace: '',
        transitions: 0
     }
  ];


  it('should sort tickets in ascending order', () => {
    const state = ticketsSlice.reducer(initialState, sortTickets('asc'));
    expect(state).toEqual([
        { 
            id: 1, 
            price: 100,
            arrivalAirport: '',
            arrivalTime: '',
            departureAirport: '',
            departureTime: '',
            outboundFlightDuration: '',
            returnFlightDuration: '',
            transitionPlace: '',
            transitions: 0
         },
         { 
            id: 3, 
            price: 150,
            arrivalAirport: '',
            arrivalTime: '',
            departureAirport: '',
            departureTime: '',
            outboundFlightDuration: '',
            returnFlightDuration: '',
            transitionPlace: '',
            transitions: 0
         },
         { 
            id: 2, 
            price: 200,
            arrivalAirport: '',
            arrivalTime: '',
            departureAirport: '',
            departureTime: '',
            outboundFlightDuration: '',
            returnFlightDuration: '',
            transitionPlace: '',
            transitions: 0
         }
    ]);
  });


})