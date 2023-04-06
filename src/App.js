import logo from './logo.svg';
import './App.css';
import './App1';
import App1 from './App1';
import App2 from './App2';
function App() {
  const buttonData =(data)=>{
    alert(data);

    const extraButton = (data2)=>{
      alert(data2);
    }
  }
  return (
    <div>
 <App1 childName = {buttonData}/>
 <App2 childButton2Name = {extraButton}/>

 </div>
  );
}

export default App;
