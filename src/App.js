//one line for imports
import React, { useState } from 'react'

//declare the main function
function App() {
  //react useState links this function to our counter variable 
  // REACT SYNTAX --> const [state, setState] = useState(initialState)
  let [counter, changeCounter] = useState(1)
  //makes that function global to the ENTIRE window so devs can use it in browser
  window.changeCounter = changeCounter
  //returns our web-page
  return (
    <div>
      <h1>{counter}</h1>
      <h4>{counter}</h4>
      <p>this page has been rendered {counter} times! Chill out!</p>
    </div>
  )
}
//export the app!
export default App;
