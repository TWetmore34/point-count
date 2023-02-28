import {getTransactions, getTransactionsById} from "./mockApi"
import { waitFor } from "@testing-library/react"
describe("mock api", () => {
    test("get/all", async () => {
        const data = await waitFor(() => getTransactions(), {timeout: 3000})
        expect(data).toHaveLength(8)

        const typeCheck = data.every((entry) => 
        typeof entry.id === "number" 
        && typeof entry.purchaseDateTime === "number" 
        && typeof entry.cost === "number")

        expect(typeCheck).toBe(true)
    })
    test("get/id", async () => {
        let id = 0;
        const data = await waitFor(() => getTransactionsById(id), {timeout: 3000})

        const typeCheck = data.every((entry) => 
        typeof entry.id === "number" 
        && typeof entry.purchaseDateTime === "number" 
        && typeof entry.cost === "number")

        expect(typeCheck).toBe(true)
        const uniqueId = data.every(entry => entry.id === id)

        expect(uniqueId).toBe(true)
    })
})