import { useState } from "react";

const FormInput = (props) => {
  const defaultInput = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
  };

  const [userInput, setUserInput] = useState(defaultInput);
  const submitHandler = (e) => {
    e.preventDefault();
    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput(defaultInput);
  };

  const inputHandler = (input, value) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [input]: value };
    });
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(e) => inputHandler("current-savings", e.target.value)}
            type="number"
            id="current-savings"
            value={userInput["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(e) =>
              inputHandler("yearly-contribution", e.target.value)
            }
            type="number"
            id="yearly-contribution"
            value={userInput["yearly-contribution"]}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(e) => inputHandler("expected-return", e.target.value)}
            type="number"
            id="expected-return"
            value={userInput["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(e) => inputHandler("duration", e.target.value)}
            type="number"
            id="duration"
            value={userInput["duration"]}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" onClick={resetHandler} className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};
export default FormInput;
