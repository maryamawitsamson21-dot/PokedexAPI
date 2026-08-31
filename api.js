
export async function api(name) {
   
    
  
    const data= await fetch(`${import.meta.env.VITE_APIKEY}${name}`)
   if(!(data.ok)){
   
    return
}
   const json = await data.json()
   return json
}



 
