import Employee from "./Components/Employee";
import Employees from "./Components/Employees";
import Loading from "./Components/Loading";
import Error from "./Components/Error";
import axios from 'axios';
import { useState, useEffect } from "react";


export default function App() {
  const [loading, setLoading] = useState(true);
  const [employeeData, setEmployeeData] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [error, setError] = useState(false);

  const resetState = () => { 
    setEmployeeData([]);
    setSelectedEmployee(null);
    setLoading(true);
    getemployeeData();
    setError(false);
  };

  const getemployeeData = (id=null) => {
    setLoading(true);

    let actualId = '';
    if(!!id && parseInt(id,10) > 0) {
      actualId = parseInt(id,10);
    }

    axios.get(`https://api.matgargano.com/employees/${actualId} `).then((response) => {
      setEmployeeData(response.data);
      setLoading(false);
    })
    .catch((error) => {
      setError(error.message || 'No error given');
      console.log(error.message);
    })
  };

  useEffect(() => {
    getemployeeData();
  }, []);

  useEffect( () => {

    if(!!selectedEmployee) {
        getemployeeData(selectedEmployee);
    }

  },[selectedEmployee])


  return (
    <div className="App">
      {!!error &&  <Error resetState={resetState} message={error} />}
      {!error && <div>
        {!!loading && <Loading />}
        {!loading && <div>
          {/* Listing of Employees */}
          {!selectedEmployee && <Employees setSelectedEmployee={setSelectedEmployee} data={employeeData}/>}

          {/* Individual Employee Listing */}
            {!!selectedEmployee && <Employee resetState={resetState} data={employeeData} />}
          
          </div>}
      </div>}
      
        
    </div>
  );
}
