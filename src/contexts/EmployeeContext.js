import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {

    const [employees, setEmployees] = useState([
        {id: uuidv4(), name: "Thomas Hardly", email: "guliyevfazil5@gmail.com", address: "M.Memmedov", phone: "553858536"},
        {id: uuidv4(), name: "Ulvi Quliyev", email: "guliyevulvi120@gmail.com", address: "M.Memmedov", phone: "559065818"},
        {id: uuidv4(), name: "Tahir Murselli", email: "mursellitahir12@gmail.com", address: "M.Memmedov", phone: "703051129"},
    ])

    const addEmployee = (name, email, address, phone) => {
        setEmployees([...employees, {id: uuidv4(), name, email, address, phone}])
    }

    const deleteEmployee = (id) => {
        setEmployees(employees.filter(employee => employee.id !==id))
    }

    const updateEmployee = (id, updatedEmployee) => {
        setEmployees(employees.map((employee) => (employee.id === id ? updatedEmployee : employee)))
    }
    return(
        <EmployeeContext.Provider value={{employees, addEmployee, deleteEmployee, updateEmployee}}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider