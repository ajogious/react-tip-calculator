import { useState } from "react";
import "./styles.css";

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = +bill * ((percentage1 + percentage2) / 2 / 100);
  console.log(bill, tip);

  const handleBillChange = (e) => {
    setBill(e.target.value);
  };

  const handleReset = () => {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  };
  return (
    <div className="wrapper">
      <div>
        <label>How much was the bill?</label>
        <input
          type="text"
          value={bill}
          placeholder="Bill value"
          onChange={handleBillChange}
        />
      </div>
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service?
      </SelectPercentage>
      <div>
        {bill > 0 && (
          <>
            <TipOutput bill={bill} tip={tip} />
            <ResetButton handleReset={handleReset} bill={bill} />
          </>
        )}
      </div>
    </div>
  );
}

function SelectPercentage({ children, onSelect, percentage }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={(e) => onSelect(+e.target.value)}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function TipOutput({ bill, tip }) {
  return (
    <p>
      <b>
        You pay ${+bill + +tip} (${bill} + ${tip})
      </b>
    </p>
  );
}

function ResetButton({ handleReset }) {
  return <button onClick={handleReset}>Reset</button>;
}

function App() {
  return (
    <>
      <h2>Tip Calculator</h2>
      <TipCalculator />
    </>
  );
}

export default App;
