import './App.css'
import useTransactions from './utils/hooks/useTransactions';
import {useState, useRef} from "react"
const lastThreeMonths = (curMonth) => {
  let arr = []
  for(let i = 1; i <= 3; i++) {
    const newDate = new Date()
    newDate.setMonth(curMonth - i)

    arr.push(newDate.getMonth())
  }
  return arr
}
function App() {
    const [transactions] = useTransactions()
    const {current: readOnlyDate} = useRef(new Date())
  return (
    <div className="App">
      <ul>
        {transactions.map(el => {
          let [one, two, three] = lastThreeMonths(readOnlyDate.getMonth())
          return (<li key={el.tList[0].id}>
            user {el.tList[0].id}
            <div>
              Month {one + 1}: {el[one] || 0}
            </div>
            <div>
              Month {two + 1}: {el[two] || 0}
            </div>
            <div>
              Month {three + 1}: {el[three] || 0}
            </div>
          </li>)
        })}
      </ul>
    </div>
  );
}

export default App;
