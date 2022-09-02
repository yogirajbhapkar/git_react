
import './App.css';
//Functional Component
import Greet from "./components/Greet";
import GreetArrow from "./components/GreetArrow";
import GreetArrow2 from "./components/GreetArrow2";
import GreetArrow3 from "./components/GreetArrow3";
import GreetArrow4 from './components/GreetArrow4';

//Class Component
import Hello from './components/Hello';
import GreetClass from './components/GreetClass';
import ClassWish1 from './components/ClassWish1';
import ClassWish2 from './components/ClassWish2';
import ClassWish3 from './components/ClassWish3';
import ClassWish4 from './components/ClassWish4';
import ClassWish5 from './components/ClassWish5';


function App() {
  return (
    <div className="App">
      {/* functional Component */}
      {/* <Greet/> */}
      {/* <GreetArrow/> */}
     
      {/* <GreetArrow2 name="Yogiraj" rollNo= "25" /> */}
      {/* //Reusing same component and adding children tag as below */}
      <GreetArrow2 name="Pamasinh" rollNo= "21">  
        <p>This is Para added</p> //This is a children tag. Access it in prop and render
      </GreetArrow2>
      {/* <GreetArrow3/> */}
      {/* <GreetArrow4 firstName="Yogiraj" lastName="Bhapkar"></GreetArrow4> */}

      {/* Class Component */}
      {/* <Hello/>  */}
      {/* <GreetClass/> */}
      {/* <ClassWish1 name="Yogiraj"/> */}
      {/* <ClassWish2 name="Yogiraj" lastName="Bhapkar"></ClassWish2> */}
      {/* <ClassWish3></ClassWish3> */}
      {/* <ClassWish4 message="Hola!"></ClassWish4> */}
      {/* <ClassWish5></ClassWish5> */}

    </div>
  );
}

export default App;
