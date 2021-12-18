const ShowB = ({isDark}) => {
  return(
    <div>
    {
      isDark
      ? <div style={{backgroundColor: 'grey'}}></div>
      : <div></div>
    }

    </div>
  );

}

export default ShowB;