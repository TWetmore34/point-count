// transaction {
// purchasedateTime: date;
// id: number;
// const: number
// }
// returns transaction[]
const transactions = [
    {id: 0, cost: 102, purchaseDateTime: new Date().setFullYear(2023, 1, 1)},
    {id: 1, cost: 98, purchaseDateTime: new Date().setFullYear(2023, 1, 1)},
    {id: 1, cost: 198, purchaseDateTime: new Date().setFullYear(2023, 1, 1)},
    {id: 0, cost: 48, purchaseDateTime: new Date().setFullYear(2023, 1, 1)},
    {id: 0, cost: 125, purchaseDateTime: new Date().setFullYear(2023, 1, 1)},
    {id: 0, cost: 92, purchaseDateTime: new Date().setFullYear(2023, 1, 1)},
    {id: 1, cost: 120, purchaseDateTime: new Date().setFullYear(2023, 1, 1)},
    {id: 3, cost: 120, purchaseDateTime: new Date().setFullYear(2023, 1, 1)}
]
// testing basics => promise should only ever res as of now (NOTE: change this later, but not a huge deal rn)
// ms should always be between 0 and 3000
// should always return transactions
export const getTransactions = () => {
    return new Promise((res, rej) => {
        let ms = Math.floor(Math.random() * 3000)
        setTimeout(() => {
            res(transactions)
        },ms)
    })
}
// same as above, but hsould only return transactions of a specific id
// returns transaction[] where all transaction.id === id
export const getTransactionsById = (id) => {
    return new Promise((res) => {
        let ms = Math.floor(Math.random() * 1000)
        setTimeout(() => {
            res(transactions.filter(el => {
                return el.id === id
            }))
        },ms)
    })
}