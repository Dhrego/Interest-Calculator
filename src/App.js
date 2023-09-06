import FormInput from "./components/FormInput/FormInput";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";

function App() {
  const calculateHandler = (e, userInput) => {
    e.preventDefault();
    console.log("clicked");

    const yearlyData = [];

    let currentSavings = +userInput["current-savings"];
    const yearlyContribution = +userInput["yearly-contribution"];
    const expectedReturn = +userInput["expected-return"] / 100;
    const duration = +userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  };

  return (
    <div>
      <Header />
      <FormInput onSubmit={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <Table />
    </div>
  );
}

export default App;
