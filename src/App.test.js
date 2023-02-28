import { render, screen, waitFor, renderHook, fireEvent } from '@testing-library/react';
import App from './App';
import useTransactions from "./utils/hooks/useTransactions"
describe("app", () => {
  test('renders unique users', async () => {
    const {result} = renderHook(useTransactions)
    render(<App />)
    await waitFor(async () => {
      const listEls = await screen.findAllByTestId("list-el")
      expect(listEls).toHaveLength(result.current[0].length)
    }, {timeout: 3000})
  });
  test("handleReset updates state to startLength - 1", async () => {
    render(<App />)
    let listEls = []
    await waitFor(async () => {
      listEls = await screen.findAllByTestId("list-el")
    }, {timeout: 3000})
    let startLength = listEls.length
    fireEvent.click(listEls[0])
    listEls = await screen.findAllByTestId("list-el")
    expect(listEls.length).toBe(startLength - 1)
  })
})
