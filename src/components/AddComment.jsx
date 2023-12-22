import React from "react";
import { Button, Form } from "react-bootstrap";


class AddComment extends React.Component {
    state = {
        comment: {
            comment: "",
            rate: 1,
            elementId: this.props.asin,
        },
    };

    sendComment = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch(
                "https://striveschool-api.herokuapp.com/api/comments",
                {
                    method: "POST",
                    body: JSON.stringify(this.state.comment),
                    headers: {
                        Authorization:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDhkZGI1MjViYjAwMThlZDA4MWIiLCJpYXQiOjE3MDMxNjgyMjEsImV4cCI6MTcwNDM3NzgyMX0.6vzEPQlQx1KPfdgrsyYbW1LQ4dBBwp-6rSJTD_waWbQ",
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.ok) {
                alert("Ricevuto");
                this.setState({
                    comment: {
                        comment: "",
                        rate: 1,
                        elementId: this.props.asin,
                    },
                });
            } else {
                alert("Errore");
            }
        } catch (err) {
            console.log("Errore:", err);
            alert("Errore");
        }
    };

    render() {
        return (
            <div className="mb-3">
                <Form onSubmit={this.sendComment}>
                    <Form.Group>
                        <Form.Label>Commenti</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="inserisci commento"
                            value={this.state.comment.comment}
                            onChange={(e) =>
                                this.setState({
                                    comment: {
                                        ...this.state.comment,
                                        comment: e.target.value,
                                    },
                                })
                            }
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Voto da 1 a 5</Form.Label>
                        <Form.Control
                            as="select"
                            value={this.state.comment.rate}
                            onChange={(e) =>
                                this.setState({
                                    comment: {
                                        ...this.state.comment,
                                        rate: e.target.value,
                                    },
                                })
                            }
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button className="mt-3" variant="primary" type="submit">
                        Invia
                    </Button>
                </Form>
            </div>
        );
    }
}

export default AddComment;