import { renderHook, waitFor } from "@testing-library/react"
import useTransactions from "./useTransactions"

describe('useTransactions', () => {
    test("should render arr of transactions", async () => {
        const view = renderHook(useTransactions)
        // defaults to empty array
        expect(view.result.current[0]).toHaveLength(0)
        await waitFor(() => expect(view.result.current[0]).toHaveLength(3), 
        {
            timeout: 3000
        })
    })
})