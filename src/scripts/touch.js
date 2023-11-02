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
            const OUTPUT_LEFT_RIGHT = document.querySelector(".output-LEFT-RIGHT")
            const OUTPUT_UP_DOWN = document.querySelector(".output-UP-DOWN")
			OUTPUT_LEFT_RIGHT.innerText = x < event.changedTouches[0].clientX ? "højre " : "venstre "
			OUTPUT_UP_DOWN.innerText = x < event.changedTouches[0].clientY ? "ned" : "op"
			x = null
		}
	}
})()
