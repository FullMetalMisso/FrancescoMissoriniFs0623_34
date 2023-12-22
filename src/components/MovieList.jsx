import React from 'react'
import {Col, Row} from 'react-bootstrap'
import SingleMovie from './SingleMovie'

class MovieList extends React.Component{
    state = {
        movies: [],
        isLoading: true,
        isError: false.Col
    }
    
    componentDidMount = async () => {
        try {
          let response = await fetch(this.props.category)
          if (response.ok) {
            let movies= await response.json()
            this.setState({ movies: movies, isLoading: false, isError: false })
          } else {
            this.setState({ isLoading: false, isError: true })
          }
        } catch (error) {
          this.setState({ isLoading: false, isError: true })
        }
      }
      
      
      render(){
        console.log(this.state.movies.search)
        let filmsList = this.state.movies.Search
        return(
            <div>
                 <h2 className='fw-medium'>{this.props.title}</h2>
                <Row>
                   {filmsList && filmsList.map((movie, index) => (
                    <SingleMovie key={index} movie={movie}/> 
                   ))}
                </Row>
            </div>
        )
      }
    }

    export default MovieList