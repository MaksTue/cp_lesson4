import { MiniMaple } from "../src/miniMaple";

test("test Example", () => {
  const polynomial = "4*x^3";
  const variable = "x";
  const derivative = MiniMaple.differentiate(polynomial, variable);
  expect(derivative).toBe("12*x^2");
});

test("test Example", () => {
  const polynomial = "4*x^3";
  const variable = "y";
  const derivative = MiniMaple.differentiate(polynomial, variable);
  expect(derivative).toBe("0");
});

test("test Example", () => {
  const polynomial = "4*x^3-x^2";
  const variable = "x";
  const derivative = MiniMaple.differentiate(polynomial, variable);
  expect(derivative).toBe("12*x^2-2*x");
});
