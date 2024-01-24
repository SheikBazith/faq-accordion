const paraBlock = document.querySelectorAll(".question");

paraBlock.forEach(element => {
    const plusBtn = element.querySelector(".icon-plus");
    const minusBtn = element.querySelector(".icon-minus");
    const paraDiv = element.querySelector(".paragraph");

    plusBtn.addEventListener("click",function(){
        plusBtn.style.display = "none";
        minusBtn.style.display = "block";
        paraDiv.style.display = "block";
    })

    minusBtn.addEventListener("click",function(){
        plusBtn.style.display = "block";
        minusBtn.style.display = "none";
        paraDiv.style.display = "none";
    })
    
});