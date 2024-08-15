import { useDispatch } from "react-redux";
import { Container } from "./components/container/Container"
import { TicketsPage } from "./components/TicketsPage"
import { useGetTicketsQuery } from "./services/api"
import { setTickets } from "./features/ticketsSlice";


function App() {

  return (
    <Container>
      <TicketsPage />
    </Container>

  )
}

export default App
