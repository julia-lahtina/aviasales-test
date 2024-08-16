import { Container } from "./components/container/Container"
import { TicketsPage } from "./components/TicketsPage"
import { useGetTicketsQuery } from "./services/api";



function App() {

  const { isLoading } = useGetTicketsQuery()

  return (
    <>

      {isLoading && <div style={{ fontSize: '30px', display: 'flex', justifyContent: 'center', marginTop: '100px' }}>Loading...</div>}

      <Container>
        <TicketsPage />
      </Container>
    </>


  )
}

export default App
