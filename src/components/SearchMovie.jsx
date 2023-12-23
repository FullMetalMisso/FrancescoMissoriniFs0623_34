import React, { Component } from 'react';
import SingleMovie from './SingleMovie';
import { Col, Form, Row } from 'react-bootstrap';

class SearchMovies extends Component {
  state = {
    searchQuery: '',
    films: [],
    isLoading: true,
    isError: false,
  };

  handleSearch = () => {
    this.fetchMovies();
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.handleSearch();
    }
  };

  fetchMovies = async () => {
    try {
      let response = await fetch(`http://www.omdbapi.com/?apikey=1b936975&s=${this.state.searchQuery}`);
      if (response.ok) {
        let films = await response.json();
        this.setState({ films: films.Search || [], isLoading: false, isError: false });
      } else {
        this.setState({ isLoading: false, isError: true });
      }
    } catch (error) {
      this.setState({ isLoading: false, isError: true });
    }
  };

  render() {
    let miniFilmsList = this.state.films || [];
    return (
      <>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Search a Film</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search here"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
                onKeyDown={this.handleKeyDown}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="flex-nowrap overflow-x-scroll">
          {miniFilmsList.map((movie, index) => (
            <SingleMovie key={index} movie={movie} />
          ))}
        </Row>
      </>
    );
  }
}

export default SearchMovies;