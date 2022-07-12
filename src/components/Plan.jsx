import { useState } from "react"

export default function Plan(props) {

  function addPlan(e) {
    props.propFunction(1);
  }

  return (
    <div>
      <button onClick={addPlan}>+</button>
    </div>
  )
}