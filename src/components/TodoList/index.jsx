import React, { useEffect, useState } from "react";
import Button from "../Atoms/Button/index";
import { FiEdit, FiDelete } from "react-icons/fi";
import { VscAdd } from "react-icons/vsc";
import axios from 'axios'
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const TodoList = () => {
  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    getApiData()
  }, [])

  const getApiData = async() => {
    setLoading(true)
   await axios.get('http://localhost:3001/data').then((res) => {
      setUser(res.data);
    }).catch(error => {
      console.error(error); 
    }).finally(() => setLoading(false))
  }
  
  return (
    <div className='container'>
      <div className="d-flex justify-content-end mb-3 mt-3">
        <Button onClick={() => navigate('/create-todo')} className="primary"><VscAdd/></Button>
      </div>
      <table className="table">
        <thead className="table-light">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Age</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <RotatingLines
            strokeColor="grey"
            strokeWidth="2"
            animationDuration="0.75"
            width="30"
            visible={true}
          />
          )}
          {
            user.map((user,index) => (
              <tr key={user.id}>
            <th scope="row">{++index}</th>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.age}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td colSpan={2} className="d-flex gap-2">
              <Button className="warning">
                <FiEdit />
              </Button>
              <Button className="danger">
                <FiDelete />
              </Button>
            </td>
          </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
