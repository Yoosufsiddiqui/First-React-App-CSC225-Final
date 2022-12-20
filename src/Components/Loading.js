import './Loading.css';
const Loading = () => {
    return <div style={{
                        backgroundColor:'#FFC0CB', 
                        display:'flex', 
                        justifyContent:'center', 
                        alignItems:'center', 
                        textAlign:'center'}} 
                        className="mx-auto mt-5 lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  };
  
  export default Loading;
  