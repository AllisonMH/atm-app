import React, {useState, useEffect} from 'react';


// useEffect for an alert to the screen if pin is wrong
// may need to set up a postgres back end to keep track of pins

const EnterPin =()=> {

  const[pin, setPin] = useState();

  function handleUserInput(event){
    setPin(event.target.value);
  }

  return(
    <div>
      <div>
        <input placeholder={'Enter 4 digit pin'} onChange={handleUserInput} />
      </div>
      <div>
      </div>
    </div>
  )


}

export default EnterPin;
