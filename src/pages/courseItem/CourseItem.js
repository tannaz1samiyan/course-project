import { Navigate, useParams } from "react-router-dom"
import data from "../../data"
import { Col, Container, Row } from "react-bootstrap"
import MyNavbar from "../../components/myNavbar/MyNavbar"

function CourseItem(){
  const courseId=useParams().courseId
  const courseInfo=data.find(item=>item.id==courseId)   
    return(
       <>
       <MyNavbar/>
        <Container className="m-4">
              <Row >
        <Col className="col-12 col-lg-4 p-2 m-3" >
        <img src={courseInfo.img} className="img-fluid"/>
      
        </Col>
          <Col className="col-12 col-lg-7 p-2 m-3" >
          <h2>{courseInfo.title}</h2>
          <p>lorem</p>
          </Col>
       </Row>
        </Container>
       </>
    )
}
export default CourseItem