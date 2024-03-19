import React, { useState } from "react";
import { connect } from "react-redux";

function Counter() {

  const [inputValue, setInputValue] = useState({ firstName: "", lastName: "" ,middlename: "" });

  const [addContact, setAddContact] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;
    // alert(event.target)
    setInputValue((prevState) => ({ ...prevState, [name]: value }));
    console.log("value typed is:", value);
  }


  function handleSubmit(event) {
    event.preventDefault();
    setAddContact((prevContact) => [...prevContact, inputValue]);
  }

  const contacts = addContact.map((c) => (
    <p>
      {c.firstName}
      {c.lastName}
    </p>
  ));



  console.log(addContact.firstName);


  //---- counter code --------
  const [count, setCount] = useState(parseInt(localStorage.getItem("cnt")) || 0)
  localStorage.setItem("cnt", count)
  const handleadd = (e) => {
    setCount(count + 1)
  }
  const handlesub = (e) => {
    setCount(count - 1)
  }
  return (
    <>
      <h2>Counter: {count}</h2>
      <button onClick={handleadd}>+</button>
      <button onClick={handlesub}>-</button>

      <form>
        <input
          placeholder="first name"
          name="firstName"
          value={inputValue.firstName}
          onChange={handleChange}
        />

        <input
          placeholder="last name"
          name="lastName"
          value={inputValue.lastName}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}> Add Contact </button>
      </form> </>
  )
}
export default Counter;
