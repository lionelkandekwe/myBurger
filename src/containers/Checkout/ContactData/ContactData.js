import React, { Component } from "react"
import Button from "../../../components/UI/Button/Button"
import Spinner from "../../../components/UI/Spinner/Spinner"
import classes from "./ContactData.module.css"
import axios from "../../../axios-orders"
import Input from "../../../components/UI/Input/Input"
class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  }
  orderHandler = (event) => {
    event.preventDefault()
    this.setState({ loading: true })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Lionel Kandekwe",
        address: {
          street: "Teststreet 0",
          zipCode: "12345",
          country: "Rwanda",
        },
        email: "test@gmail.com",
      },
      deliveryMethod: "fastest",
    }
    axios
      .post("/orders.json", order)
      .then((response) => {
        this.setState({ loading: false })
        this.props.history.push("/")
      })
      .catch((error) => {
        this.setState({ loading: false })
      })
  }
  render() {
    let form = (
      <form>
        <Input
          inputtype="input"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <Input
          inputtype="input"
          type="email"
          name="email"
          placeholder="Your Mail"
        />
        <Input
          inputtype="input"
          type="text"
          name="street"
          placeholder="Street"
        />
        <Input
          inputtype="input"
          type="text"
          name="postalCode"
          placeholder="PostalCode"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          Order
        </Button>
      </form>
    )
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact Data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData
