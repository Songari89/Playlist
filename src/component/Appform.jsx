import React, { useState } from "react";

export default function Appform() {
  const [form, setForm] = useState({name:'',email:''})
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const handleChange = (e)=>{
    const{name,value} = e.target;
    setForm({...form, [name]:value})
  }
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="name">이름 :</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChange}
      />
      <label htmlFor="email">이메일 :</label>
      <input
        id="email"
        type="email"
        name="email"
        onChange={handleChange}
      />
      <button type="submit">submit</button>
    </form>
  );
}
