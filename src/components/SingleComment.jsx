import { Col, Button } from 'react-bootstrap'

const SingleComment = (props) => {


    const deleteComment = async (asin) => {
        try {
            let response = await fetch(
                "https://striveschool-api.herokuapp.com/api/comments/" + asin,
                {
                    method: "DELETE",
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NDhkZGI1MjViYjAwMThlZDA4MWIiLCJpYXQiOjE3MDMxNjgyMjEsImV4cCI6MTcwNDM3NzgyMX0.6vzEPQlQx1KPfdgrsyYbW1LQ4dBBwp-6rSJTD_waWbQ',
                    },
                }
            );
            if (response.ok) {
                alert("Commento eliminato");
            } else {
                alert("Errore nella cancellazione");
            }
        } catch (err) {
            alert("Errore");
        }
    };


    return (
        <Col className="d-flex justify-content-between">
            <p className='textCommenti'>Recensione: {props.commento.comment}</p>
            <Button variant="danger" onClick={() => deleteComment(props.commento._id)}>
                Delete
            </Button>
        </Col>

    )

}

export default SingleComment