const math = require("mathjs");
class MiniMaple {
  static differentiate(expression, variable) {
    const invalidOperators = expression.match(/[^+\-\*\^0-9a-zA-Z\s]/);
    if (invalidOperators) {
      throw new Error("Недопустимые операции в полиноме");
    }
    const x = math.parse(variable);
    const polyExpression = math.parse(expression);
    const derivative = math.derivative(polyExpression, x);
    return derivative.toString().replace(/\s/g, "");
  }
}
export { MiniMaple };
