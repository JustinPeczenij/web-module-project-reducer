import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';

import reducer, { initialState } from './reducers/index';
import { changeOperation, applyNumber, clearDisplay } from './actions/index'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);
  
  // Event Handlers
  const handleIntegers = (num) => {
    dispatch(applyNumber(num))
  }

  const handleOperation = (operator) => {
    dispatch(changeOperation(operator))
  }

  const handleClearDisplay = () => {
    dispatch(clearDisplay())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={()=> {handleIntegers(1)}}/>
              <CalcButton value={2} onClick={()=> {handleIntegers(2)}}/>
              <CalcButton value={3} onClick={()=> {handleIntegers(3)}}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={()=> {handleIntegers(4)}}/>
              <CalcButton value={5} onClick={()=> {handleIntegers(5)}}/>
              <CalcButton value={6} onClick={()=> {handleIntegers(6)}}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={()=> {handleIntegers(7)}}/>
              <CalcButton value={8} onClick={()=> {handleIntegers(8)}}/>
              <CalcButton value={9} onClick={()=> {handleIntegers(9)}}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=> {handleOperation("+")}}/>
              <CalcButton value={"*"} onClick={()=> {handleOperation("*")}}/>
              <CalcButton value={"-"} onClick={()=> {handleOperation("-")}}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={()=> {handleClearDisplay()}}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
