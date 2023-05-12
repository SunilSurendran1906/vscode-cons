
document.addEventListener("readystatechange",(event)=>{
    if(event.target.readyState==="complete"){
        console.log("complete");
        initApp();
    }
})

const initApp=()=>{
    const view=document.querySelector("#view2")
    const div=view.querySelector("div")
    const h2=div.querySelector("h2")


    view.addEventListener("click",(event)=>{
       
        view.classList.add("purple");
        view.classList.remove("remove");
    })
   
    div.addEventListener("click",(event)=>{
        // event.stopPropagation();
        event.target.style.backgroundColor="black"
    })
    h2.addEventListener("click",(event)=>{
        
        event.target.textContent="Subscribed"
    })
}












