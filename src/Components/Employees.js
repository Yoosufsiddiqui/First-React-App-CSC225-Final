const Employees = (props) => {

    return <div style={{backgroundColor:'#f5f5dc', padding:'20px 20px' , textAlign: 'center'}}> {
      props.data.map(emp => {

        return <p 
        key={emp.id}
        onClick={() => {
          props.setSelectedEmployee(emp.id);
        }}
           style={{cursor: 'pointer'}} 
           role = "button"> <strong>{emp.name}</strong> from <strong>{emp.department}</strong>  --  <strong>{emp.id}</strong>
           
           </p>
      })

    } </div>;
  };
  
  export default Employees;