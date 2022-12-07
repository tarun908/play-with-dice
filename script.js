let btn= document.querySelector("#play")
btn.addEventListener("click", function(){
    let box= document.querySelectorAll(".box")
    let choice=[1,2,3,4,5,6]
    let random= parseInt(Math.random()*choice.length)
    let diceValue=choice[random]
   
    console.log(diceValue)
    for(let i=0;i<=box.length-1;i++){
        if(box[i].id==diceValue){
            let x= box[i].classList.remove("hide")
        }else{
            box[i].classList.add("hide")
        }
    }   
    let box2= document.querySelectorAll(".box2")
    let choice1=[1,2,3,4,5,6]
    let random1= parseInt(Math.random()*choice1.length)
    let diceValue1=choice1[random1]
    console.log(diceValue1)
    for(let i=0;i<=box2.length-1;i++){
        if(box2[i].id==diceValue1){
         box2[i].classList.remove("hide")
        }else{
            box2[i].classList.add("hide")
        }
    }
   let output=document.querySelector(".output")
    if(diceValue==diceValue1){
        output.innerHTML=`match is draw`
    }else if(diceValue>diceValue1){
        output.innerHTML=`player won`
    }else if(diceValue<diceValue1){
        output.innerHTML=`computer won`
    }

})

// btn.addEventListener("click", function(){
    
   
   

// })


