import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Course(props){


    return(
        <>
            <Card   >
      <Card.Img  variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.disc}
        </Card.Text>
        <Button  variant="primary"><Link to={`course/${props.id}`} style={{color:'black',textDecoration:'none'}}>ادامه</Link></Button>
      </Card.Body>
    </Card>
  
        </>
    )
}
export default Course