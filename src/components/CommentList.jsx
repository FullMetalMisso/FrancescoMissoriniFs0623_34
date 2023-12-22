import {Row, Col} from 'react-bootstrap'
import SingleComment from './SingleComment'


const CommentList = (props) => {
    return(
        <Row>
            {props.commenti.length === 0 ? (
                <Col>
                    <p className='textCommenti'>Non ci sono commenti</p>
                </Col>
            ) : (
                props.commenti.map((commento) => (
                    <SingleComment key={commento._id} commento = {commento}/>
                    
                ))
            )}
        </Row>
   
    )
}

export default CommentList