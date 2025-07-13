import { Container, Row ,Col } from "react-bootstrap"
import MyNavbar from "../../components/myNavbar/MyNavbar"
import program from "../../assets/images/undraw_programmer_raqr.svg"
import Course from "../../components/Course/Course"
import data from "../../data"
import { useState } from "react"
function Home(){
    let [courses, setCourses]=useState(data)
    return(
    <>
     <MyNavbar/>
    <Container>
       <Row >
        <Col  className='col-12 col-xs-12  col-md-12 col-lg-6' style={{paddingTop:'80px'}}>
           <h2 style={{paddingBottom:'50px'}}>برنامه نویسی با نکست وان کد</h2>
           <p style={{textAlign:'justify'}}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
        </Col>
         <Col className="col-12  col-xs-12 col-md-12 col-lg-6">
        <img src={program} className="img-fluid"/>
         </Col>
       </Row>
       <Row>
        <h3 style={{paddingBottom:'30px' ,marginTop:'70px'}}>دوره های آموزشی</h3>
       {
        courses.map(course=>
        (<Col className="col-12 col-md-6 col-lg-4 col-xl-3 gy-4">
        <Course {...course}/>
        </Col>

        )
        )
       }
       </Row>
    </Container>
    </>
    
    )
}
export default Home