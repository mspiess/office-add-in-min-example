/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { OfficeMockObject } from "office-addin-mock";
import App from "./App";

/* global global, it, expect */

const officeMock = new OfficeMockObject({});
// @ts-ignore
global.Office = officeMock;

it("should render message while fetching contact(s)", () => {
  render(<App title={"Some Title"} isOfficeInitialized={false} />);

  expect(screen.getByRole("heading")).toHaveTextContent("Some Title");
});
