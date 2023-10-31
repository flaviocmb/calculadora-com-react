import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operations, setOperations] = useState("0");

  const handleAddNumber = (number) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${number}`);
  };

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperations("");
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperations("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber("0");
      setOperations("");
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperations("-");
    } else {
      const minus = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(minus));
      setFirstNumber("0");
      setOperations("");
    }
  };

  const handleMultiplyNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperations("*");
    } else {
      const multiply = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiply));
      setFirstNumber("0");
      setOperations("");
    }
  };

  const handleDevideNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperations("/");
    } else {
      if(currentNumber === "0") {
        setCurrentNumber("Não é um número.");
        setTimeout(() => {
          setCurrentNumber("");
          handleOnClear();
        }, 2000);
      } else {
        const devide = Number(firstNumber) / Number(currentNumber);
        setCurrentNumber(String(devide));
        setFirstNumber("0");
        setOperations("");
      }
    }
  };

  const handleIquals = () => {

    if (firstNumber !== "0" && operations !== "" && currentNumber !== "0") {
      switch(operations) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumbers();
          break;
        case "*":
          handleMultiplyNumbers();
          break;
        case "/":
          handleDevideNumbers();
          break
        default:
          break;
      }
    } else {
      handleDevideNumbers();
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          {/* <Button label="C" onClick={() => handleOnClear()}/> */}
          <Button label="C" isButtonTwoBlocks={true} onClick={handleOnClear} />
          <Button label="%" onClick={() => handleAddNumber("%")} />
          <Button label="&#247;" onClick={handleDevideNumbers} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="x" onClick={handleMultiplyNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="0" isButtonTwoBlocks={true} onClick={() => handleAddNumber("0")} />
          <Button label="," onClick={() => handleAddNumber(",")} />
          <Button label="=" onClick={handleIquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
