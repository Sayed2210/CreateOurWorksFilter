let switcher = Array.from(document.querySelectorAll('.switcher li'));
let imgs = Array.from(document.images); 

switcher.forEach((li)=>{
    li.addEventListener("click", (e) => {
            switcher.forEach((li) => {
                li.classList.remove("active");
            });
            e.currentTarget.classList.add("active");
            imgs.forEach((img)=>{
                img.style.display= "none";
            })
            document.querySelectorAll(e.currentTarget.dataset.cat).forEach((el)=>{
                el.style.display= "block";
            })
        })
})