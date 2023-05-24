

let activeindex = 0;

const slides = document.getElementsByTagName("article");

const handleleft = () => {
   const nextindex = activeindex - 1 >= 0 ? activeindex - 1 : slides.length - 1;

   const currentslide = document.querySelector(`[data-index="${activeindex}"]`),
      nextslide = document.querySelector(`[data-index="${nextindex}"]`);

   currentslide.dataset.status = "after";

   nextslide.dataset.status = "becoming-active-from-before";

   setTimeout(() => {
      nextslide.dataset.status = "active";
      activeindex = nextindex;
   });
}



const handleright = () => {
   const nextindex = activeindex + 1 <= slides.length - 1 ? activeindex + 1 : 0;

   const currentslide = document.querySelector(`[data-index="${activeindex}"]`),
      nextslide = document.querySelector(`[data-index="${nextindex}"]`);

   currentslide.dataset.status = "before";

   nextslide.dataset.status = "becoming-active-from-after";

   setTimeout(() => {
      nextslide.dataset.status = "active";
      activeindex = nextindex;
   });
}

const slide = document.getElementsByClassName("container");

const aboutlink = () => {

   

   nextindex = 6;
   


   const currentslide = document.querySelector(`[data-index="${activeindex}"]`),
      nextslide = document.querySelector(`[data-index="${nextindex}"]`);

      currentslide.dataset.status = "down"

   

      setTimeout(() => {
         nextslide.dataset.status = "up-to-down";
         activeindex = nextindex;
      });  


}

const blob = document.getElementById("blob");

document.body.onpointermove = event => {
   const{ clientX, clientY } = event;

   blob.style.left = `${clientX}px`;
   blob.style.top = `${clientY}px`;

}

const New = () =>{
   console("this is new")
}




