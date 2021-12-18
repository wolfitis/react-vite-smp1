const CustomMsg = ({msg, isDark}) => {
  return(
    <div>
      {isDark 
      ? <h1 style={{color: 'red'}}>{msg}</h1>
      : <h1>{msg}</h1> 
    }
    </div>
    // <div>
    // <h1 style={{color: 'red'}}>{msg}</h1>
    // {/* <h1>{msg}</h1> */}
    // {/* <h2>Yello</h2> */}
    // </div>
  );
}

export default CustomMsg;