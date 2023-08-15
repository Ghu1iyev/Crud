import React, { useState } from "react";
import Field from "../Atoms/Field";
import Button from "../Atoms/Button/index";
import Loading from "../Atoms/Loading";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

const CreateTodo = () => {
  const [loading, setLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const Navigate = useNavigate()
  const [form, setForm] = useState({
    name: "",
    surname: "",
    age: "",
    phone: "",
    email: "",
  });

  const HandleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  console.log(form)
  const HandlePost = (e) => {
    setLoading(true)
    setDisabled(true)
    e.preventDefault()
    axios.post('http://localhost:3001/data', form).then((res) => {
      if(res.status === 201){
      }
    }).catch((err) => {
      throw new Error(err)
    }).finally(() => {
      setLoading(false)
      setDisabled(false)
      setForm({
        surname: "",
        age: "",
        phone: "",
        email: "",
        name: "",
      })
      Navigate('/')
    })
  }
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-xl-12">
          <form onSubmit={(e) => e.preventDefault()}>
            <Field text="Your Name">
              <input
                name="name"
                value={form.name}
                onChange={HandleChange}
                className="w-100 p-4 border-none outline-none rounded-2 shadow-none"
                type="text"
                placeholder="Enter your name"
              />
            </Field>
            <Field text="Your Surname">
              <input
                onChange={HandleChange}
                name="surname"
                value={form.surname}
                className="w-100 p-4 border-none outline-none rounded-2 shadow-none"
                type="text"
                placeholder="Enter your surname"
              />
            </Field>
            <Field text="Your Age">
              <input
                onChange={HandleChange}
                name="age"
                value={form.age}
                className="w-100 p-4 border-none outline-none rounded-2 shadow-none"
                type="text"
                placeholder="Enter your age"
              />
            </Field>
            <Field text="Your Phone">
              <input
                onChange={HandleChange}
                name="phone"
                value={form.phone}
                className="w-100 p-4 border-none outline-none rounded-2 shadow-none"
                type="text"
                placeholder="Enter your phone"
              />
            </Field>
            <Field text="Your Email">
              <input
                onChange={HandleChange}
                name="email"
                value={form.email}
                className="w-100 p-4 border-none outline-none rounded-2 shadow-none"
                type="email"
                placeholder="Enter your email"
              />
            </Field>
            <Button onClick={HandlePost} disabled={disabled} className="primary w-100 mt-3 my-3 p-3">
              {
                loading && 
                  <Loading width="30" color="#fff" delay="1.5s" />
                  
              }
              Add New
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;
