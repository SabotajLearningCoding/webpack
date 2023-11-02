export default (function() {
	if (!window.location.pathname.includes("touch.html")) return // guard clause

	const DIV = document.querySelector(".touchDiv")

	DIV.addEventListener("touchstart", touchHandler)
	DIV.addEventListener("touchend", touchHandler)

	let x

	function touchHandler(event) {
		console.log(event.changedTouches[0].clientX)
		if (event.type === "touchstart") {
			x = event.changedTouches[0].clientX
		} else {
            const OUTPUT = document.querySelector(".output")
			OUTPUT.innerText = x < event.changedTouches[0].clientX ? "højre" : "venstre"
			x = null
		}
	}
})()
