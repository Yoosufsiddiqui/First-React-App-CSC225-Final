const Employee = (props) => {

    return (
        <div className="card mx-auto my-4"  style = {{padding: '30px 40px', backgroundColor:'#FFEFD5', color:'#2E8B57' , width:'20rem', display:"flex", justifyContent:"center", alignItems:"center"}}>
         <img src={props.data.photo} className="card-img-top" alt="picture_Id"></img>
         <div className="card-body"> 
            <ul>
                <li><h4>Name:  {props.data.name}</h4></li>
                <li><h5>ID Number: {props.data.id}</h5></li>
                <li><h5>Department: {props.data.department}</h5></li>
                <li><h5>Role: {props.data.role}</h5></li>
                <li><h5>Start Date: {props.data.startDate}</h5></li>
            </ul>
         </div>
         <button type="button" className="btn btn-outline-success" onClick = {props.resetState}>Back to Employee List</button>
        </div>
        )
      }
  
  export default Employee;
  