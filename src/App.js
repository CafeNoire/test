import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App(props) {
  const [apiData, setApiData] = useState("");
  const [search, setSearch] = useState("");
  const [imgAlbum, setImgAlbum] = useState('');
  const [songTitle,setSingTitle] = useState('');
  const [albumTitle,setAlbumTitle] = useState('');
  const [artistName,setArtistName] = useState('');


  useEffect(() => {
    axios
      .get("https://itunes.apple.com/search?term=jack+johnson")
      .then((response) => {
        setApiData(response.data.results);
      });
  }, []);
  console.log(apiData);



  return (
    <div className="App">
     
    
        
      
    </div>
  );
}

export default App;
