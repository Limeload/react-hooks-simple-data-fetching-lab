// create your App component here
import React , {useState , useEffect} from "react";

function App() {
const [random , setRandom] = useState(null)

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => setRandom(data.message))
},[]);

if (!random) return <p>Loading...</p>;
return <img src={random} alt="A Random Dog"></img>
}

export default App;