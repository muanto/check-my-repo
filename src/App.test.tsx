import React, { act } from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
test("renders learn react link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const titleElement = screen.getByText(/Benvenuto/i);
  expect(titleElement).toBeInTheDocument();
  const proceedButton = screen.getByText(/Procediamo/i);
  expect(titleElement).toBeInTheDocument();
  act(() => {
    proceedButton.click();
  });

  const usernameInput = screen.getByPlaceholderText(/username/i);
  expect(usernameInput).toBeInTheDocument();
});
