import { useState } from "react";
import Button from "../Button";
import "./style.css";

const Calculator = () => {
    const [result,setResult] = useState(null);
    const [var1,setVar1] = useState(null);
    const [calculator,setCalculator] = useState(null);
    const [var2,setVar2] = useState(null);
    
    const handleClickButton = (label) => {
        if (label === 'c') {
            setResult(null);
            setVar1(null);
            setCalculator(null);
            setVar2(null);
          } else if (label === '=') {
            if (var1 && calculator && var2) {
              const num1 = parseFloat(var1);
              const num2 = parseFloat(var2);     
              switch (calculator) {
                case '+':
                  setResult(num1 + num2);
                  break;
                case '-':
                  setResult(num1 - num2);
                  break;
                case 'x':
                  setResult(num1 * num2);
                  break;
                case '/':
                  setResult(num1 / num2);
                  break;
                default:
                  setResult(null);
              }
              setVar1(null);
              setCalculator(null);
              setVar2(null);
            }
          } else if ('+-x/'.includes(label)) {
            if (var1 && !calculator) {
              setCalculator(label);
            }
          } else {
            if (!calculator) {
              setVar1((prevVar1) => (prevVar1 ? prevVar1 + label : label));
            } else {
              setVar2((prevVar2) => (prevVar2 ? prevVar2 + label : label));
            }
          }
    }

  return (
    <div className="calculator__container">
      <div className="screen">
        <input type="text" readOnly value={result !== null ? result : var1 + (calculator ? calculator : '') + (var2 !== null ? var2 : '')}/>
      </div>
      <div className="button__container">
        <div className="button-row button-calculation">
          <Button label="+" handleClickButton={handleClickButton}/>
          <Button label="-" handleClickButton={handleClickButton}/>
          <Button label="x" handleClickButton={handleClickButton}/>
          <Button label="/" handleClickButton={handleClickButton}/>
        </div>
        <div className="buttons">
          <div>
            <div className="button-row">
              <Button label="7" handleClickButton={handleClickButton}/>
              <Button label="8" handleClickButton={handleClickButton}/>
              <Button label="9" handleClickButton={handleClickButton}/>
            </div>
            <div className="button-row ">
              <Button label="4" handleClickButton={handleClickButton}/>
              <Button label="5" handleClickButton={handleClickButton}/>
              <Button label="6" handleClickButton={handleClickButton}/>
            </div>
            <div className="button-row">
              <Button label="1" handleClickButton={handleClickButton}/>
              <Button label="2" handleClickButton={handleClickButton}/>
              <Button label="3" handleClickButton={handleClickButton}/>
            </div>
            <div className="button-row">
              <Button label="0" handleClickButton={handleClickButton}/>
              <Button label="." handleClickButton={handleClickButton}/>
              <Button label="c" handleClickButton={handleClickButton}/>
            </div>
          </div>
          <div className="button-equal">
            <div className="button-result">
              <Button label="=" handleClickButton={handleClickButton}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
