

import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import Protectedroute from './components/Protectedroute';
import { useEffect, useState } from 'react';

import Aptitude from './components/Aptitude/Aptitude';
import ITjob from './components/ITJOB/ITjob';
import Ssb from './components/SSB/Ssb';
import Govjob from './components/Govjov/Govjob';
import Iasnotes from './components/IASnotes/Iasnotes';
import Cat from './components/Cat/Cat';



import Novels from './components/Novels/Novel';

import School_Books from './components/School_Books/School_Books';
import SellBooks from './components/SellBooks/Sell_Books';


import Novel_Harry from './components/NovelDatas/harry/HarryPorter';
import halfgirlfriend from './components/NovelDatas/HalfGirlFriend/halfgirlfriend';
import wingsoffire from './components/NovelDatas/WingsofFire/wingsoffire';
import PiratsOfCaribbean from './components/NovelDatas/PiratsOfCaribbean/PiratsofCaribbean';


import Transaction from './components/NovelDatas/HalfGirlFriend/Transaction';


import class12book from './components/BuyBookList/Class12Books/class12book';
import BankExam from './components/BuyBookList/BankExam/BankExam';
import UpscBook from './components/BuyBookList/UpscBook/UpscBook';


import Routes from './Routes';
import Bookdetails from './components/Bookdetails';





function App() {

  {/* useEffect = tell react that your component needs to do somethinmg after render
     switch = use to handle conditional rendering
    useState Hook = allows us to track state in function component 
 */}



  //  Check if User is Logged in
  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);




  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      if (res.status === 200) {
        setauth(true)
        setauth1(false)
      }

      if (res.status === 401) {
        setauth(false)
        setauth1(true)
      }


    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);




  {/*   
    Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

    Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.

*/}


  return (
    <>

      {/* your react app requests a jwt from  the authentication server whenever the user wants to sign on  */}

      <Navbar auth={auth1} />

      <Switch>
        {/*  It enables the navigation among views of various components in a React Application,
          allows changing the browser URL, and keeps the UI in sync with the URL  */}

        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />


        <Route exact path="/Aptitude" component={Aptitude} />
        <Route exact path="/ITjob" component={ITjob} />
        <Route exact path="/Ssb" component={Ssb} />

        <Route exact path="/Iasnotes" component={Iasnotes} />

        <Route exact path="/Govjob" component={Govjob} />
        <Route exact path="/Cat" component={Cat} />


        <Route exact path="/SellBooks" component={SellBooks} />
        <Route exact path="/Novels" component={Novels} />

        <Route exact path="/School_Books" component={School_Books} />

        <Route exact path="/Novel_Harry" component={Novel_Harry} />
        <Route exact path="/halfgirlfriend" component={halfgirlfriend} />
        <Route exact path="/wingsofFire" component={wingsoffire} />
        <Route exact path="/PiratsOfCaribbean" component={PiratsOfCaribbean} />



        <Route path='/Transaction' component={Transaction} />

        <Route exact path="/Bookdetails" component={Bookdetails} />

        <Route exact path="/class12book" component={class12book} />
        <Route exact path="/BankExam" component={BankExam} />
        <Route exact path="/UpscBook" component={UpscBook} />


        {/* those routes that only grant access to authorized users */}

        <Protectedroute exact path="/login" component={Login} auth={auth1} />

        <Protectedroute exact path="/register" component={Register} auth={auth1} />

        <Protectedroute exact path="/logout" component={Logout} auth={auth} />
      </Switch>
      <Footer />


      <Routes />



    </>
  )
}





export default App;



