
import { sortTickets, ticketsSlice } from '../features/ticketsSlice';


describe('ticketsSlice', () => {

  const initialState = {
   tickets: [
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
  ]}


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