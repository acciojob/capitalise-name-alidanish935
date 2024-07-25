//your JS code here. If required.

function capitlize() {
	const inpVal = document.getElementById("fname");
	inpVal.value = inpVal.value.toUpperCase();
}
document.getElementById("fname").addEventListener('blur',capitlize);