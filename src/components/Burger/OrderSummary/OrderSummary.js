import React, { Component } from "react"
import Aux from "../../../hoc/Auxiliary/Auxiliary"
import Button from "../../UI/Button/Button"
class OrderSummary extends Component {
  // this could be a functional component ,doesn't have to be class
  componentDidUpdate() {
    console.log("[OrderSummary] WillUpdate")
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
            {this.props.ingredients[igKey]}
          </li>
        )
      }
    )
    return (
      <Aux>
        <h3>Your order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong> Total Price:{this.props.totalPrice.toFixed(2)}</strong>{" "}
        </p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.PurchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          Continue
        </Button>
      </Aux>
    )
  }
}
export default OrderSummary
