import './App.css';
import Card from './Card';
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  return ( 
<div className='container'>
  <img src="logo192.png" alt="img1"></img>
  <div className='row'>
    <Card name="hello"></Card>
    <Card name="earth"></Card>
    <Card name="Moon"></Card>
    <Card name="Pluto"></Card>
    <Card name="Ilakia"></Card>
  </div>

</div>

  )
    
}

export default App;


/* <Card name={{type:'FREE', rate:0, 
        icon:["fa-solid fa-check", "fa-solid fa-check", "fa-solid fa-check", "fa-solid fa-check", 
        "fa-solid fa-xmark", "fa-solid fa-xmark", "fa-solid fa-xmark", "fa-solid fa-xmark"]}}></Card>
        <Card name={{type:'PLUS', rate:9, icon:["fa-solid fa-check", "fa-solid fa-check", "fa-solid fa-check", 
        "fa-solid fa-check", "fa-solid fa-check", "fa-solid fa-check", "fa-solid fa-check", "fa-solid fa-xmark"]}}></Card>
        <Card name={{type:'PRO', rate:49, icon:["fa-solid fa-check", "fa-solid fa-check", "fa-solid fa-check", 
        "fa-solid fa-check", "fa-solid fa-check", "fa-solid fa-check", "fa-solid fa-check", "fa-solid fa-check"]}}></Card> */