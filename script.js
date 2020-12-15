const steps = [
	{
		number:1,
		arrowType:"arrow-up"
	},
	{
		number:2,
		arrowType:"arrow-down"
	},
	{
		number:3,
		arrowType:"arrow-right"
	},
	{
		number:4,
		arrowType:"arrow-left"
	}
]
const doubleStep = [
	{
		number:5,
		arrowType:"arrow-up"
	},
	{
		number:6,
		arrowType:"arrow-down"
	},
	{
		number:7,
		arrowType:"arrow-right"
	},
	{
		number:8,
		arrowType:"arrow-left"
	}
]
const numberSlot = document.getElementsByClassName('number')
const arrowSlot = document.getElementsByClassName('arrow')
const boxMove = (numberSlot,arrowSlot)=>{
	setInterval(function (){
		let randomNumber = Math.floor(Math.random() * 3) + 1;
		const randomArrow =steps.filter(step=> step.number === randomNumber)[0].arrowType
		numberSlot.item(0).innerHTML = randomNumber
		console.log("./assets"+randomArrow+".svg")
		arrowSlot.item(0).src = "./assets/"+randomArrow+".svg"
	},4000)

}

boxMove(numberSlot,arrowSlot)