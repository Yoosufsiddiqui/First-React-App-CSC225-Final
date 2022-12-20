const Error = (props) => {
    return <div> 
       <p>Error: {props.message} </p>
       <button onClick={props.resetState}>Back To List</button>
      </div>;
  };
  
  export default Error;