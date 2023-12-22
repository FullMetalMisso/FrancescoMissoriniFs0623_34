import {Col, Container, Row} from 'react-bootstrap'
import MovieList from './MovieList'

const AllMovies = () => {

    return(
        <Container className="mx-2">
             <Row>
            <Col xs={12}>
                <MovieList category ="http://www.omdbapi.com/?apikey=3e720846&s=avengers" title="Avengers" />
                <MovieList category = "http://www.omdbapi.com/?apikey=3e720846&s=harry%20potter" title="Harry Potter" /> 
                <MovieList category = "http://www.omdbapi.com/?apikey=3e720846&s=lord%20of%20the%20ring" title="Er signore degli anelli"/> 
            </Col>
        </Row>
        </Container>
       
    )
}

export default AllMovies