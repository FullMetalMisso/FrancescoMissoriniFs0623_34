import React from 'react'
import {Col} from 'react-bootstrap'
import CommentArea from './CommentArea'

class SingleMovie extends React.Component {
    state = {
        selected: false,
    }
    render(){
    return(
        <Col>
            <div onClick={() => this.setState({selected: !this.state.selected})}>
            <img src={this.props.movie.Poster} />
            </div>
            {this.state.selected && <CommentArea id={this.props.movie.imdbID}/>}  
        </Col>
    )}
}

export default SingleMovie