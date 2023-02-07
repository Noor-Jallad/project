var collapseOne=document.getElementById("collapseOne")
var collapseTwo=document.getElementById("collapseTwo")
var collapseThree=document.getElementById("collapseThree")
var accordition_item1=document.getElementById("accordition-item1")
var accordition_item2=document.getElementById("accordition-item2")
var accordition_item3=document.getElementById("accordition-item3")
var plusIcon=document.getElementsByClassName("fa-plus")

// console.log(accordition_item1,accordition_item2,accordition_item3,plusIcon)
console.log(plusIcon)
// accordition_item1.addEventListener("click",function(){
//     accordition_item1.classList.add("active")
//     collapseOne.classList.add("show")
//     plusIcon[0].classList.replace("fa-plus","fa-minus")
//    collapseOne.style.cssText="height:302px"
// })
accordition_item1.addEventListener("click",function(){
    if(plusIcon[0].classList.contains("fa-minus"))
{     
    accordition_item1.classList.remove("active")
      plusIcon[0].classList.replace("fa-minus","fa-plus")
      collapseOne.classList.remove("show")
      collapseOne.style.display="none!important; height:0 !important"
     
}else{
    accordition_item1.classList.add("active")
    collapseOne.classList.add("show")
    plusIcon[0].classList.replace("fa-plus","fa-minus")
   collapseOne.style.cssText="height:320px !important"
}
})

accordition_item2.addEventListener("click",function(){
    if(plusIcon[1].classList.contains("fa-minus"))
{     
    accordition_item2.classList.remove("active")
      plusIcon[1].classList.replace("fa-minus","fa-plus")
      collapseTwo.classList.remove("show")
      collapseTwo.style.cssText="display:none !important; height:0 !important"
     
}else{
    accordition_item2.classList.add("active")
    collapseTwo.classList.add("show")
    plusIcon[1].classList.replace("fa-plus","fa-minus")
   collapseTwo.style.cssText="height:320px !important"
}
})

// accordition_item2.addEventListener("click",function(){
//     accordition_item1.classList.add("active")
//     collapseTwo.classList.add("show")
//     plusIcon[1].classList.replace("fa-plus","fa-minus")
//     collapseOne.style.cssText="height:302px"
// })

// accordition_item3.addEventListener("click",function(){
//     if(plusIcon[2].classList.contains("fa-minus"))
// {     
//       accordition_item2.classList.remove("active")
//       plusIcon[2].classList.replace("fa-minus","fa-plus")
//       collapseThree.classList.remove("show")
//       collapseThree.style.cssText="display:none !important;"
     
// }else{
//     accordition_item3.classList.add("active")
//     collapseThree.classList.add("show")
//     plusIcon[2].classList.replace("fa-plus","fa-minus")
//    collapseThree.style.cssText="height:300px !important"
// }
// })


accordition_item3.addEventListener("click",function(){
    if(plusIcon[2].classList.contains("fa-plus"))
{  
    accordition_item3.classList.add("active")
    collapseThree.classList.add("show")
    plusIcon[2].classList.replace("fa-plus","fa-minus")
   collapseTwo.style.cssText="height:350px !important"
  
     
}else{
    accordition_item3.classList.remove("active")
    collapseThree.classList.remove("show")
    plusIcon[2].classList.replace("fa-minus","fa-plus")
    collapseThree.style.cssText="width:0 !important; height:0 !important"
}
})
// accordition_item3.addEventListener("click",function(){
//     accordition_item1.classList.add("active")
//     collapseThree.classList.add("show")
//     plusIcon[2].classList.replace("fa-plus","fa-minus")
//     collapseOne.style.cssText="height:302px"
// })


