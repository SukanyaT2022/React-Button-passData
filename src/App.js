import logo from './logo.svg';
import './App.css';
import './App1';
import App1 from './App1';
import App2 from './App2';
function App() {
  const buttonData =(data)=>{
    alert(data)
  }

  const extraButton = (data2)=>{
    alert(data2);
  }
  return (
    <div>
 <App1 childName = {buttonData("hello world")}/>
 <App2 childButton2Name = {extraButton("goodbye")}/>

 </div>
  );
}

export default App;
