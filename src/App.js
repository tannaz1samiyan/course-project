

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import './App.css';
import Aboute from './pages/aboute/Aboute';
import Login from './pages/login/Login';
import Article from './pages/article/Article';
import Panel from './pages/panel/Panel';

import CourseItem from './pages/courseItem/CourseItem';
import PrivateRoute from './PrivateRoute';
function App() {
  return (
  <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/aboute' element={<Aboute/>}/>
    <Route path='/login' element={<Login/>}/>
    < Route path='/article/*' element={<Article/>}>
    <Route path='php' element={<h1>php course</h1>}/>
    <Route path='java' element={<h1>java course</h1>}/>
    <Route path='html' element={<h1>html course</h1>}/>
    </Route>
    
    <Route path='/course/:courseId' element={<CourseItem/>}/>
    <Route path='/panel' element={<PrivateRoute><Panel/></PrivateRoute>}/>
   </Routes>
   
   </BrowserRouter>
  </>

  );
}

export default App;
