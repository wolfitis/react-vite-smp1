import CustomMsg from "../components/CustomMsg";
// import ToggleBtn from "../components/ToggleBtn";
import { useState, useEffect } from 'react';

const ShowA = () => {
  const [isDark, setIsDark] = useState(false);

  // why isn't it rendering on every btn click?
  // useEffect(() => {
  //   console.log('isDark -useEffect 1');
  // },[])

  useEffect(() => {
    {isDark ? 'dark' : 'light'}
    console.log('isDark -useEffect2', isDark);
    // {effect}
  }, [isDark])

  const handleChk = () => {
    setIsDark(!isDark);
    // console.log('isDark-inside', isDark);
  }
  return(
    <div>
    <button onClick={()=> handleChk()}>{isDark?'Dark':'Light'}</button>
      <CustomMsg msg={'This is custom message!'} isDark={isDark}/>
      {/* <CustomMsg msg={'This is custom message!'}/> */}
      <h2>Is it?</h2>
    </div>
  );

}

export default ShowA;