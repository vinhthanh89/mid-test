import { useState } from "react";
import Button from "../Button";
import "./style.css";

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleClick = (label) => {
    setResult((prevResult) => prevResult + label);
  };

  const clear = () => {
    setResult('');
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (e) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator__container">
      <div className="screen">
        <input type="text" readOnly value={result}/>
      </div>
      <div className="button__container">
        <div className="button-row button-calculation">
          <Button label="+" handleClickButton={handleClick}/>
          <Button label="-" handleClickButton={handleClick}/>
          <Button label="*" handleClickButton={handleClick}/>
          <Button label="/" handleClickButton={handleClick}/>
        </div>
        <div className="buttons">
          <div>
            <div className="button-row">
              <Button label="7" handleClickButton={handleClick}/>
              <Button label="8" handleClickButton={handleClick}/>
              <Button label="9" handleClickButton={handleClick}/>
            </div>
            <div className="button-row ">
              <Button label="4" handleClickButton={handleClick}/>
              <Button label="5" handleClickButton={handleClick}/>
              <Button label="6" handleClickButton={handleClick}/>
            </div>
            <div className="button-row">
              <Button label="1" handleClickButton={handleClick}/>
              <Button label="2" handleClickButton={handleClick}/>
              <Button label="3" handleClickButton={handleClick}/>
            </div>
            <div className="button-row">
              <Button label="0" handleClickButton={handleClick}/>
              <Button label="." handleClickButton={handleClick}/>
              <Button label="c" handleClickButton={clear}/>
            </div>
          </div>
          <div className="button-equal">
            <div className="button-result">
              <Button label="=" handleClickButton={calculate}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
