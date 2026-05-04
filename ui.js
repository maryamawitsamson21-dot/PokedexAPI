import {api} from "./api.js"

const btn=document.getElementById("btn")
const error=document.getElementById("error")


const type=document.getElementById("type")
const statshtml=document.getElementById("stats")
const doll=document.getElementById("doll")
 const input=document.getElementById("input")



btn.addEventListener("click",async ()=>{
    if(!input.value){
         type.textContent=""
     statshtml.innerHTML=""
    
     doll.src=""
         error.textContent=`empty value`
         return
    }
    
  error.textContent="" 
const pro=await api(input.value)
if(!pro){error.textContent = "doesn't exist";  type.textContent=""
     statshtml.innerHTML=""
    
     doll.src="" 
     return}

    type.textContent=pro.types.map(t=>t.type.name)
     statshtml.innerHTML=pro.stats.map(t=>`${t.stat.name}: ${t.base_stat}`).join("<br>")
    
     doll.src=pro.sprites.front_default
   

   
   

})