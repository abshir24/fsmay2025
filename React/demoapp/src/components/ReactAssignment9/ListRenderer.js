function ListRenderer() {
   const foods = ["Pasta", "Pizza", "Tikka Masala"]

  return (
    <ul>
      {
        foods.map((food)=>(
            <li>{food}</li>
        ))
      }
    </ul>
  );
}

export default ListRenderer;