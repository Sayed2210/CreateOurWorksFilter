
let switcher = Array.from(document.querySelectorAll('.switcher li'));
let imgs = Array.from(document.images); 

switcher.forEach((li)=>{
    li.addEventListener("click", (e) => {
            //display active class
            switcher.forEach((li) => {
                li.classList.remove("active");
            });
            //add active class
            e.currentTarget.classList.add("active");
            //display all images
            imgs.forEach((img)=>{
                img.style.display= "none";
            })
            //show filterd images
            document.querySelectorAll(e.currentTarget.dataset.cat).forEach((el)=>{
                el.style.display= "block";
            })
        })
})