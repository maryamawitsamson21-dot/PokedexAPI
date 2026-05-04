
export async function api(name) {
   
    
  
   const data= await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
   if(!(data.ok)){
   
    return
}
   const json = await data.json()
   return json
}



 