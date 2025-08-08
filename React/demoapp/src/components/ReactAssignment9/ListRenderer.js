import './ListRenderer.css'

function ListRenderer() {
  const foods = ["Pasta", "Pizza", "Tikka Masala"]

  return (
    <ul>
      {
        foods.map((food)=>(
            <li className="test">{food}</li>
        ))
      }
    </ul>
  );
}

export default ListRenderer;