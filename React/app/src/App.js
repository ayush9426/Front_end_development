import react from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';// bootsrap rreact link for running the app web
// import Funarray from './state/Funarray';
// import Funobj from './state/Funobj';
// import UserTable from './use-effect/UserTable';
// import Fetchuser from './use-effect/Fetchuser';
// import Fetchproduct from './use-effect/Fetchproduct';
// import Fetchrecipes from './use-effect/Fetchrecipes';
// import Fetchcompanies from './use-effect/Fetchcompanies';
// import ToDoList from './TO_DO_LIST/ToDoList';
// import Axiosuser from './use-effect/Axiosuser';
// import Axioscompanies from './use-effect/Axioscompanies';
// import Axioscard from './use-effect/Axioscard';
// import Axioscart from './use-effect/Axioscart';
// import Axiosrecipes from './use-effect/Axiosrecipes';
// import Hello from './BOOTSTRAP/Hello';
// import Foot from './router/common pages/Foot';
// import { Nav } from 'react-bootstrap';
// import Head from './router/common pages/Head';
// import About from './router/pages/About';
// import Home from './router/pages/Home';
// import Help from './router/pages/Help';
// import Contact from './router/pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router';
// import Notfound from './router/pages/Notfound';
// import About1 from './router/pages/About1';
// import About2 from './router/pages/About2';
import Footer from './Layout router/comm page/Footer';
import Header from './Layout router/comm page/Header';
import Home from './Layout router/norm page/Home';
import About from './Layout router/norm page/About';
import Contact from './Layout router/norm page/Contact';
import Help from './Layout router/norm page/Help';
import Services from './Layout router/norm page/Services';
import Error from './Layout router/norm page/Error';
// import { Route, Routes } from 'react-router';
// import FormData from './form/FormData';
// import FormObj from './form/FormObj';
// import ClassState from './state/ClassState';
// import FunState from './state/FunState';
// import Mainprops from './props/MainProps';
// import ClassCompo from './component/ClassCompo';
// import FunCompo from './component/FunCompo';
// import Hello from './Jsx/Hello';
// import ClassProps from './props/ClassProps';
// import FunProps from './props/FunProps';


function App() {
  return (
    // <ClassCompo />
    // <FunCompo />

    // <Hello />

    // <ClassProps />
    // <FunProps />
    // <Mainprops />
    // <ClassState/>
    // <FunState />
    // <FormData/>
    // <FormObj/>
    // <Funarray />
    // <Funobj />

    //{ api fetch axios }

    // <UserTable/>
    // <Fetchuser/>
    // <Fetchproduct/>
    // <Fetchrecipes/>
    // <Fetchcompanies/>
    // <ToDoList/>
    // <Axiosuser/>
    // <Axioscompanies/>
    // <Axioscard/>
    // <Axioscart/>
    // <Axiosrecipes/>
    // <Hello/>
    // <Foot/>
    // <Head/>
    // <About/>
    // <Home/>
    // <Help/>
    // <Contact/>

    // layout router

    // <Footer/>
    // <Header/>
    // <Home/>
    // <About/>
    // <Contact/>
    // <Help/>
    // <Services/>
    // <Error/>




    <BrowserRouter>
{ /*     //this is the routing style for router folder
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}>
          <Route path='about1' element={<About1/>}/>
          <Route path='about2' element={<About2/>}/>
        </Route>
        <Route path='/help' element={<Help/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes> */  }


      {/* /* this is the  routing style for layout router */ }
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>

  


     </BrowserRouter> 
    

    
  );
}

export default App;