const option = {
	method: 'GET',
	headers: 'Content-Type'-'application-json'

}


let pageLoad = () => {
	window.addEventListener('load', (event) =>{
		fetch('https://api.adviceslip.com/advice').then(res => res.json()).then(data =>{
document.getElementById('adviceId').innerHTML = `Advice # ${JSON.stringify(data.slip.id)}`
	document.getElementById('quote').innerHTML = JSON.stringify(data.slip.advice)
	})

const element = document.getElementById('icon')
element.classList.remove('rotated-image'); // reset animation
void element.offsetWidth; // trigger reflow
element.classList.add('rotated-image'); // start animation
})
}

pageLoad();

document.getElementById('btn').addEventListener('click', function() {
	fetch('https://api.adviceslip.com/advice').then(res => res.json()).then(data =>{
	document.getElementById('adviceId').innerHTML = `Advice # ${JSON.stringify(data.slip.id)}`
	document.getElementById('quote').innerHTML = JSON.stringify(data.slip.advice)
	})
const element = document.getElementById('icon')

element.classList.remove('rotated-image'); // reset animation
void element.offsetWidth; // trigger reflow
element.classList.add('rotated-image'); // start animation

})

