// (number) => number[]
export const lastThreeMonths = (curMonth) => {
    let arr = []
    for(let i = 1; i <= 3; i++) {
      const newDate = new Date()
      newDate.setMonth(curMonth - i)
  
      arr.push(newDate.getMonth())
    }
    return arr
  }
  // (epoch date) => boolean
const monthInRange = (date) => {
  let curDate = new Date()
  let epoch = curDate.setMonth(curDate.getMonth() - 3)
  return date >= epoch
}
// (number) = > number
const convertCostToPoints = (cost) => {
  let points = 0
  if(cost >= 100) {
      points += (50 + ((cost - 100) * 2))
  } else if (cost < 100 && cost > 50) {
      points += cost - 50
  }
  return points
}
// transaction[] => transactionMap[]
export const sumTransactions = (arr) => {
    const transactionMap = {}
    arr.forEach(transaction => {
      // if month of data given is outside three month bound, pass to next entry
      if (monthInRange(transaction.purchaseDateTime) === false) {
        return;
      }
        let month = new Date(transaction.purchaseDateTime).getMonth();
        if(transactionMap[transaction.id] === undefined) {
            transactionMap[transaction.id] = {
                tList: [],
                points: 0
            }
        }
        if(transactionMap[transaction.id][month] === undefined) {
            transactionMap[transaction.id][month] = 0
        }
        // find a better way to map this - maybe set it up as some kind of array instead
        transactionMap[transaction.id] = {
            ...transactionMap[transaction.id],
            tList: [...transactionMap[transaction.id].tList, transaction],
            points: transactionMap[transaction.id].points + convertCostToPoints(transaction.cost),
            // add points formula conditionals to this
            [month]: transactionMap[transaction.id][month] + convertCostToPoints(transaction.cost)
        }
    })
    console.log(transactionMap)
    return Object.values(transactionMap)
}