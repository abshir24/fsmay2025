import logo from './logo.svg';
import './App.css';
import { getPlaylists, addPlaylist } from './api/api'
import{ useState, useEffect } from 'react'

function App() {
  const [playlists, setPlaylists] = useState([])

  useEffect(()=>{
    const getAllPlaylists = async () =>{
      const response = await getPlaylists()

      // console.log("Responses from express ", response.data )

      setPlaylists(response.data)
    }

    getAllPlaylists()
  })

  const handleSubmit = async (e)=>{
    e.preventDefault()

    let title =  e.target['title'].value
    let description = e.target['description'].value
    let creator = e.target['creator'].value

    const response = await addPlaylist({title:title,description:description, creator:creator})
  
    console.log("Playlist added, ", response.data)
  }


  return (
    <div className="App">
       <form onSubmit={handleSubmit}>
          <input type="text" placeholder="title" name="title"/>
          <input type="text" placeholder="description" name="description"/>
          <input type="text" placeholder="creator" name="creator"/>

          <button type="submit">Add Playlist</button>
        </form> 

        <table>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Creator</th>
            </tr>

            {
                playlists.map(playlist=>(
                    <tr>
                        <td>{playlist.title}</td>
                        <td>{playlist.description}</td>
                        <td>{playlist.creator}</td>
                    </tr>
                ))
            }
        </table>
    </div>
  );
}

export default App;
