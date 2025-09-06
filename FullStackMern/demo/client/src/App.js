import logo from './logo.svg';
import './App.css';
import { getPlaylists } from './api/api'

function App() {
  const getData = async ()=>{
    const response = await getPlaylists()

    console.log(response.data)
  }

  return (
    <div className="App">
     <button onClick = {getData}> Get All Playlists</button>
    </div>
  );
}

export default App;
