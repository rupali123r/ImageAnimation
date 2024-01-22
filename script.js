

const throttleFunction = (func, delay) =>{
	let prev = 0;
	return(...args)=>{
		let now = new Date().getTime();
		if(now - prev > delay){
			prev = now;
			return func(...args);
		}
	}
}

document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets)=>{
var div = document.createElement("div");
div.classList.add("imageDiv");
div.style.left = dets.clientX + "px";
div.style.top = dets.clientY + "px"


var img = document.createElement("img");
img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE5fPhctwNLodS9VmAniEw_UiLWHgKs0fs1w&usqp=CAU");

div.appendChild(img);

document.body.appendChild(div);

gsap.to(img, {
y: "0",
ease: Power4,
duration: 0.3
});
gsap.to(img, {
y: "100%",
delay:0.4,
ease: Power2,

});




setTimeout(() => {
div.remove();
}, 2000);

}, 300)

);


