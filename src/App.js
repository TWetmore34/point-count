import './App.css'
import useTransactions from './utils/hooks/useTransactions';
import {useState} from "react"
function App() {
    const [transactions] = useTransactions()
    const [filters, setFilters] = useState([])
    const handleFilter = (e) => {
      setFilters([...filters, e.target.id])
    }
    const handleReset = () => {
      setFilters([])
    }
  return (
    <div className="App">
      filters
      {filters.map(filter => {
        return <p key={filter}>user {filter}</p>
      })}
      <button onClick={handleReset}>Reset</button>
      <ul>
        {transactions.map(el => {
          if(filters.includes(`${el.tList[0].id}`)) {
            return null
          }
          return (
          <li data-testid="list-el" onClick={handleFilter} id={el.tList[0].id} key={el.tList[0].id}>
          user {el.tList[0].id} has {el.points} points
          </li>)
        })}
      </ul>
    </div>
  );
}

export default App;
