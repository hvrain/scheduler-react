import { useEffect, useState } from 'react';
import './App.css';
import DateText from './components/DateText';
import Plan from './components/Plan';
import Schedule from './components/Schedule';

function App() {
  const [plans, setPlans] = useState([]);

  function addPlanTag(plan) {
    setPlans([...plans, plan]);
  }

  return (
    <div>
      <DateText />
      <Plan propFunction={addPlanTag} />
      <Schedule plans={plans} />
    </div>
  )
}

export default App;
