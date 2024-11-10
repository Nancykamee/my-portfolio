document.querySelectorAll("a").forEach(link =>{
  link.addEventListener("click", function (e) {
    document.body.style.transition = "opacity 0.5s";
    document.body.style.opacity = "0";
    setTimeout(() => {
      window.location.href = this.href
    }, 500);
  })
})
// console.log("nancy is the best")
const aboutLink = document.getElementById("aboutLink")
aboutLink.addEventListener("mouseover", function() {
  aboutLink.style.color = "peru";
})
aboutLink.addEventListener("mouseout", function (){
  aboutLink.style.color = "";
});