import { useState } from "react"
import { Section, Div, ButtonNumber, ButtonOperation, Span, Input } from "../../styles/tags"

import { FaAngleLeft, FaDivide, FaGripLines, FaMinus, FaPercentage, FaPlus } from 'react-icons/fa';
import { FaUndo , FaTimes } from 'react-icons/fa';

export const Home = () => {
  const [number, setNumber] = useState("0");
  const [oldNumber, setOldNumber] = useState("");
  const [oldOperator, setOldOperator] = useState("");

  const [history0, setHistory0] = useState("");
  const [history1, setHistory1] = useState("");
  const [history2, setHistory2] = useState("");
  const [history3, setHistory3] = useState("");
  const [history4, setHistory4] = useState("");
  const [history5, setHistory5] = useState("");

  function handleTyping (key) {
    if (((!isNaN(key)) || key === ".") && (key !== " ")) {
      handleClickNumbers(key);
    } else if (key === ",") {
      handleClickNumbers(".");
    } else if (key === "Backspace") {
      handleClear("simple");
    } else if (key === "+") {
      handleOperations("sum");
    } else if (key === "-") {
      handleOperations("sub");
    } else if (key === "*") {
      handleOperations("mult");
    } else if (key === "/") {
      handleOperations("div");
    } else if ((key === "Enter") || (key === " ")) {
      handleOperations("equal");
    }
  }
  function handleClear (action) {
    if (action === "simple") {
      if (number.length > 1) {
        setNumber(number.slice(0, -1));
      } else {
        setNumber("0");
      }
    } else if (action === "normal") {
      if (history0.includes("=")) {
        setOldNumber("");
        setOldOperator("");
        setNumber("0");
      } else {
        setHistory0(history1);
        setHistory1(history2);
        setHistory2(history3);
        setHistory3(history4);
        setHistory4(history5);
        setHistory5("");
        setOldNumber("");
        setOldOperator("");
        setNumber("0");
      }
    } else if (action === "complete") {
      setOldNumber("");
      setOldOperator("");
      setNumber("0");
      setHistory0("");
      setHistory1("");
      setHistory2("");
      setHistory3("");
      setHistory4("");
      setHistory5("");
    }
  }
  function handlePercent () {
    setNumber(number / 100);
  }
  function invertNumber () {
    if (number.includes("-")) {
      setNumber(number.replace("-",""));
    } else if (number !== "0") {
      setNumber("-" + number);
    }
  }
  function handleClickNumbers (character) {
    if (((number === "0") || (number === 0)) && (character !== ".") ) {
      setNumber(character);
    } else {
      setNumber(number + character);
    }
  }
  function handleHistory0 (op, result) {
    if (op === "sum") {
      setHistory0(result + " + ");
      setOldNumber(result);
      setOldOperator(op);
    } else if (op === "sub") {
      setHistory0(result + " - ");
      setOldNumber(result);
      setOldOperator(op);
    } else if (op === "mult") {
      setHistory0(result + " x ");
      setOldNumber(result);
      setOldOperator(op);
    } else if (op === "div") {
      setHistory0(result + " / ");
      setOldNumber(result);
      setOldOperator(op);
    } else if (op === "equal") {
      setHistory0(result);
      setOldNumber("");
      setOldOperator("");
    }
  }
  function reorderHistory (op) {    
    if (op === "equal") {
      if (number.includes("-")) {
        if (oldOperator === "sum") {
          handleHistory0(op, (oldNumber + " + (" + number + ") = " + (parseFloat(oldNumber) + parseFloat(number))));
          setNumber((parseFloat(oldNumber) + parseFloat(number)));
        } else if (oldOperator === "sub") {
          handleHistory0(op, (oldNumber + " - (" + number + ") = " + (parseFloat(oldNumber) - parseFloat(number))));
          setNumber((parseFloat(oldNumber) - parseFloat(number)));
        } else if (oldOperator === "mult") {
          handleHistory0(op, (oldNumber + " x (" + number + ") = " + (parseFloat(oldNumber) * parseFloat(number))));
          setNumber((parseFloat(oldNumber) * parseFloat(number)));
        } else if (oldOperator === "div") {
          handleHistory0(op, (oldNumber + " / (" + number + ") = " + (parseFloat(oldNumber) / parseFloat(number))));
          setNumber((parseFloat(oldNumber) / parseFloat(number)));
        }
      } else {
        if (oldOperator === "sum") {
          handleHistory0(op, (oldNumber + " + " + number + " = " + (parseFloat(oldNumber) + parseFloat(number))));
          setNumber((parseFloat(oldNumber) + parseFloat(number)));
        } else if (oldOperator === "sub") {
          handleHistory0(op, (oldNumber + " - " + number + " = " + (parseFloat(oldNumber) - parseFloat(number))));
          setNumber((parseFloat(oldNumber) - parseFloat(number)));
        } else if (oldOperator === "mult") {
          handleHistory0(op, (oldNumber + " x " + number + " = " + (parseFloat(oldNumber) * parseFloat(number))));
          setNumber((parseFloat(oldNumber) * parseFloat(number)));
        } else if (oldOperator === "div") {
          handleHistory0(op, (oldNumber + " / " + number + " = " + (parseFloat(oldNumber) / parseFloat(number))));
          setNumber((parseFloat(oldNumber) / parseFloat(number)));
        }
      }
    } else {
      if (number.includes("-")) {
        if (oldOperator === "sum") {
          setHistory1(oldNumber + " + (" + number + ") = " + (parseFloat(oldNumber) + parseFloat(number)));
          handleHistory0(op, (parseFloat(oldNumber) + parseFloat(number)));
        } else if (oldOperator === "sub") {
          setHistory1(oldNumber + " - (" + number + ") = " + (parseFloat(oldNumber) - parseFloat(number)));
          handleHistory0(op, (parseFloat(oldNumber) - parseFloat(number)));
        } else if (oldOperator === "mult") {
          setHistory1(oldNumber + " x (" + number + ") = " + (parseFloat(oldNumber) * parseFloat(number)));
          handleHistory0(op, (parseFloat(oldNumber) * parseFloat(number)));
        } else if (oldOperator === "div") {
          setHistory1(oldNumber + " / (" + number + ") = " + (parseFloat(oldNumber) / parseFloat(number)));
          handleHistory0(op, (parseFloat(oldNumber) / parseFloat(number)));
        }
      } else {
        if (oldOperator === "sum") {
          setHistory1(oldNumber + " + " + number + " = " + (parseFloat(oldNumber) + parseFloat(number)));
          handleHistory0(op, (parseFloat(oldNumber) + parseFloat(number)));
        } else if (oldOperator === "sub") {
          setHistory1(oldNumber + " - " + number + " = " + (parseFloat(oldNumber) - parseFloat(number)));
          handleHistory0(op, (parseFloat(oldNumber) - parseFloat(number)));
        } else if (oldOperator === "mult") {
          setHistory1(oldNumber + " x " + number + " = " + (parseFloat(oldNumber) * parseFloat(number)));
          handleHistory0(op, (parseFloat(oldNumber) * parseFloat(number)));
        } else if (oldOperator === "div") {
          setHistory1(oldNumber + " / " + number + " = " + (parseFloat(oldNumber) / parseFloat(number)));
          handleHistory0(op, (parseFloat(oldNumber) / parseFloat(number)));
        }
      }
    }
  }
  function handleOperations (op) {   
    if (oldOperator === "") {
      setHistory5(history4);
      setHistory4(history3);
      setHistory3(history2);
      setHistory2(history1);
      setHistory1(history0);
      setOldNumber(number);
      setOldOperator(op);
      if (op === "sum") {
        setHistory0(number + " + ");
      } else if (op === "sub") {
        setHistory0(number + " - ");
      } else if (op === "div") {
        setHistory0(number + " / ");
      } else if (op === "mult") {
        setHistory0(number + " x ");
      }
    } else if (number === "0") {
      if (op === "sum") {
        setHistory0(oldNumber + " + ");
      } else if (op === "sub") {
        setHistory0(oldNumber + " - ");
      } else if (op === "div") {
        setHistory0(oldNumber + " / ");
      } else if (op === "mult") {
        setHistory0(oldNumber + " x ");
      } else if (op === "equal") {
        reorderHistory(op);
      }
      setOldOperator(op);
    } else {
      if (op === "equal") {
        reorderHistory(op);
      } else {
        setHistory5(history4);
        setHistory4(history3);
        setHistory3(history2);
        setHistory2(history1);
        reorderHistory(op);
      }
    }
    setNumber("0");
  }
  function extractResult (history) {
    const result = history.split(" ")

    if (result[result.length-1] !== ""){
      setNumber(result[result.length-1]);
    }
  }

  return (
    <Section>
      <Div display="flex" gap="0">
        <Span onClick={e => extractResult(history5)} minH="8%" textLimit="3.5vw" textSize="0.5rem" color="#dfdede30" radius="1.5em 1.5em 0 0">{history5}</Span>
        <Span onClick={e => extractResult(history4)} minH="10%" textLimit="4vw" textSize="0.65rem" color="#dfdede50">{history4}</Span>
        <Span onClick={e => extractResult(history3)} minH="12%" textLimit="4.5vw" textSize="0.8rem" color="#dfdede70">{history3}</Span>
        <Span onClick={e => extractResult(history2)} minH="14%" textLimit="5vw" textSize="0.95rem" color="#dfdede90">{history2}</Span>
        <Span onClick={e => extractResult(history1)} minH="16%" textLimit="5.5vw" textSize="1.1rem" color="#dfdedeb0">{history1}</Span>
        <Span onClick={e => extractResult(history0)} minH="18%" textLimit="6vw" textSize="1.25rem" color="#dfdeded0">{history0}</Span>
        <Input value={number} onClick={e => invertNumber()} onKeyDown={(e) => handleTyping(e.key)}>{number}</Input>
      </Div>

      <Div>
        <ButtonOperation onClick={e => handleClear("normal")}>C</ButtonOperation>
        <ButtonOperation onClick={e => handlePercent()}><FaPercentage/></ButtonOperation>
        <ButtonOperation onClick={e => handleClear("simple")}><FaAngleLeft/></ButtonOperation>
        <ButtonOperation onClick={e => handleOperations("div")}><FaDivide/></ButtonOperation>
        <ButtonNumber onClick={e => handleClickNumbers("7")}>7</ButtonNumber>
        <ButtonNumber onClick={e => handleClickNumbers("8")}>8</ButtonNumber>
        <ButtonNumber onClick={e => handleClickNumbers("9")}>9</ButtonNumber>
        <ButtonOperation onClick={e => handleOperations("mult")}><FaTimes/></ButtonOperation>
        <ButtonNumber onClick={e => handleClickNumbers("4")}>4</ButtonNumber>
        <ButtonNumber onClick={e => handleClickNumbers("5")}>5</ButtonNumber>
        <ButtonNumber onClick={e => handleClickNumbers("6")}>6</ButtonNumber>
        <ButtonOperation onClick={e => handleOperations("sub")}><FaMinus/></ButtonOperation>
        <ButtonNumber onClick={e => handleClickNumbers("1")}>1</ButtonNumber>
        <ButtonNumber onClick={e => handleClickNumbers("2")}>2</ButtonNumber>
        <ButtonNumber onClick={e => handleClickNumbers("3")}>3</ButtonNumber>
        <ButtonOperation onClick={e => handleOperations("sum")}><FaPlus/></ButtonOperation>
        <ButtonOperation onClick={e => handleClear("complete")}><FaUndo/></ButtonOperation>
        <ButtonNumber onClick={e => handleClickNumbers("0")}>0</ButtonNumber>
        <ButtonNumber onClick={e => handleClickNumbers(".")}>.</ButtonNumber>
        <ButtonOperation onClick={e => handleOperations("equal")}><FaGripLines/></ButtonOperation>
      </Div>
    </Section>
  )
}