import BtnContainer from './Components/BtnContainer'
import './App.css'
import Display from './Components/Display';
import { useState } from 'react';

function App() {
 const [calVal,setCalVal]=useState("");

 const onButtonClick=(buttonText)=>{
     if(buttonText === '='){
       try{
         setCalVal(eval(calVal));
       }catch(error){
         setCalVal("Error");
       }
     }else if(buttonText === 'C'){
       setCalVal("");
     }else{
          const newDisplay=calVal+buttonText
       setCalVal(newDisplay);
     }
  
 };

 return <>
 <h1>My Calculator</h1>
     <div className='calculator'>
      <Display calVal={calVal}></Display>
      <BtnContainer onButtonClick={onButtonClick} />
 </div>
 </>
}

export default App
