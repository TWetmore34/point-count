import { useState, useEffect } from "react"
import { getTransactions } from "../mockApi/mockApi"
// testing basics => should expect typeof input and output to be a number
// add some inputs to cover our three main cases - under $50, between 50 and 100, and 100+
const convertCostToPoints = (cost) => {
    let points = 0
    if(cost >= 100) {
        points += (50 + ((cost - 100) * 2))
    } else if (cost < 100 && cost > 50) {
        points += cost - 50
    }
    return points
}
// expect typeof to be an obj - make sure both tList and points are defined for every entry
// output length should === number of unique ids in input
const sumTransactions = (arr) => {
    const transactionMap = {}
    arr.forEach(transaction => {
        if(transactionMap[transaction.id] === undefined) {
            transactionMap[transaction.id] = {
                tList: [], 
                points: 0
            }
        }
        // find a better way to map this - maybe set it up as some kind of array instead
        transactionMap[transaction.id] = {
            tList: [...transactionMap[transaction.id].tList, transaction],
            // add points formula conditionals to this
            points: transactionMap[transaction.id].points + convertCostToPoints(transaction.cost)
        }
    })
    return Object.values(transactionMap)
    
}
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