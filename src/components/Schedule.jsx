
export default function Schedule({plans}) {
  let count = 0
  return (
    <div>
      {plans.map(plan => (
        <div key={count++} style={{ color: "red" }}>{plan}</div>
      ))}
    </div>
  )
}