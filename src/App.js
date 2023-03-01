import './App.css'
import useTransactions from './utils/hooks/useTransactions';
import {useRef} from "react"
import {lastThreeMonths} from "./utils/utils"

function App() {
    const [transactions] = useTransactions()
    const {current: readOnlyDate} = useRef(new Date())
  return (
    <div className="App">
      <ul className='flex'>
        {transactions.map(el => {
          let [one, two, three] = lastThreeMonths(readOnlyDate.getMonth())
          return (
          <li className='flex-child' key={el.tList[0].id}>
            user {el.tList[0].id}
            <div>
              <p>
                Month {one + 1}: {el[one] || 0}
              </p>
            </div>
            <div>
              <p>
                Month {two + 1}: {el[two] || 0}
              </p>
            </div>
            <div>
              <p>
                Month {three + 1}: {el[three] || 0}
              </p>
            </div>
            <p>
              total: {el.points}
            </p>
          </li>)
        })}
      </ul>
    </div>
  );
}

export default App;
