import { Link, Outlet } from "react-router-dom"
import MyNavbar from "../../components/myNavbar/MyNavbar"
import { Container } from "react-bootstrap"

function Article(){
    return(
<>
 <MyNavbar/>
<Container className="text-center">
   
 
 <div className="p-3">
<button className="px-3 m-2 rounded border-0 shadow"><Link to='php' >php</Link></button>
<button className="px-3 m-2 rounded border-0 shadow"><Link to="java">java</Link></button>
<button className="px-3 m-2 rounded border-0 shadow"><Link to='html'>html</Link></button>
 </div>
<hr/>
<Outlet/>
</Container>
</>
        
    )
}
export default Article