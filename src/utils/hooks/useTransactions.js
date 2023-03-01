import { useState, useEffect } from "react"
import { getTransactions } from "../mockApi/mockApi"
import { sumTransactions } from "../utils"
// do some research on testing custom hooks and best practices in it
// obs return should be based on output of mockApi, as well as its arr len 2 and state based
const useTransactions = () => {
    const [transactions, setTransactions] = useState([])
    useEffect(() => {
        getTransactions().then(res => {
            const sorted = sumTransactions(res)
            setTransactions(sorted)
        })
    },[])
  return [transactions, setTransactions]
}

export default useTransactions