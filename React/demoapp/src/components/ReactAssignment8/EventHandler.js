function EventHandler() {
   //Write code for call back functions here

   let handleClick = () =>{
        console.log("The button was clicked")
   }

  return (
    <div>
      <button onClick = {handleClick}>Click</button>
    </div>
  );
}

export default EventHandler;
