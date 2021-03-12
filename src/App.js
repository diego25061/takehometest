import './App.css'
import CommitsList from './components/CommitsList'
import { List, Container, Header, Segment } from 'semantic-ui-react'

function App() {
    return (
        
    <div className="App">

        <Container>
            <Header as="h2" textAlign="center">Commits List</Header>
            <Segment padded="very">
                <CommitsList />
            </Segment>
        </Container>
    </div>
    )
}

export default App
