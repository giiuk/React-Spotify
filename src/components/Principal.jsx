import { useEffect, useState } from "react"

export default function Principal(){

  const [artistas, setArtistas] = useState([])

  useEffect(()=>{

    fetch('http://localhost:3000/artistas')
    .then(res => res.json())
    .then(res => setArtistas(res))
    .catch(err => console.log(err))
    .finally(()=> console.log("Acabou!"))
  },[])

      return(
        <div className="bg-gray-400 w-3/4 grid grid-cols-4 pl-20 items-center">
          <h1>Gênero Pop</h1>
          {artistas
            .map( artistas => (
              <div className="bg-red-500 w-28 h-28 flex flex-col justify-around items-center">
              <p>{artistas.name}</p>
            </div>
            ))
          }
        </div>
      )
    
}