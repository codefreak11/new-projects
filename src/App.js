import React, { useState } from 'react';
import './style.css';

function App (){
 
    const [number,setNumber] = useState('');
     function displayNumber(e){
         setNumber(number + e.target.innerText)

        }
     function getResult(){
       
       setNumber(eval(number)); 
     }         
return(

    <div>
<div id = 'newDiv'>
                
                <div id = 'subDiv'>
                
                {number}                    
                </div>

                <div id = 'rootDiv'>
                   <button onClick = {displayNumber} className = 'btn'>1</button>
                   <button onClick = {displayNumber} className = 'btn'>2</button>
                   <button onClick = {displayNumber} className = 'btn'>3</button>
                   <button onClick = {displayNumber} className = 'btn'>+</button>
                   <button onClick = {displayNumber} className = 'btn'>4</button>
                   <button onClick = {displayNumber} className = 'btn'>5</button>
                   <button onClick = {displayNumber} className = 'btn'>6</button>
                   <button onClick = {displayNumber} className = 'btn'>-</button>
                   <button onClick = {displayNumber} className = 'btn'>7</button>
                   <button onClick = {displayNumber} className = 'btn'>8</button>
                   <button onClick = {displayNumber} className = 'btn'>9</button>
                   <button onClick = {displayNumber} className = 'btn'>*</button>
                   <button onClick = {displayNumber} className = 'btn'>0</button>
                   <button className = 'btn'>AC</button>
                   <button onClick = {getResult} className = 'btn'>=</button>
                   <button onClick = {displayNumber} className = 'btn'>/</button>
                </div>
            </div>

           </div>
    
    
    
    
  )
   
}

export default App;
