import { useEffect } from 'react';

const ToggleBtn = ({label, isDark}) => {
  useEffect(() => {
    // {isDark ? 'dark' : 'light'}
    console.log('isDark', isDark);
    // {effect}
  }, [isDark])
  return (
    <div>
    {label}{' '}
    {/* <Checkbox checked={isDark} onChange={()=>{}}/> */}
    <button onClick={()=> isDark(!isDark)}>{isDark?'Dark':'Light'}</button>
    {/* <input type='checkbox' name={label} id={label} /> */}
    </div>
  );

}

export default ToggleBtn;