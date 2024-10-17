import React,{useState} from "react";


//create your first component

let initialCycle = 1;

const Home = () => {


	const [Purple, setPurple] = useState(false);
	const [LightColor, setLightColor] = useState('red');

	const PurpleLight = () => {
		return (
			<div className= {"light purple" +(LightColor==='purple' ? " glow":"")} id="purple"></div>
		)
	}

	function toggleColor() {
		if (Purple==false) {
			setPurple(true);
			return
		}
			setPurple(false);
			return
	}

	function Cycling (){
		if (initialCycle===0) {setLightColor('red')}
		if (initialCycle===1) {setLightColor('yellow')}
		if (initialCycle===2) {setLightColor('green')}
		if (initialCycle===3) {setLightColor('purple')}
		initialCycle++
		if (Purple) { if (initialCycle===4) initialCycle=0 }
		else {if (initialCycle===3) initialCycle=0}
		console.log(initialCycle)
	}

	function turnLight(e) {
		if (e.target.id==="red") {setLightColor('red')}
		if (e.target.id==="yellow") {setLightColor('yellow')}
		if (e.target.id==="green") {setLightColor('green')}
		if (e.target.id==="purple") {setLightColor('purple')}
		console.log(e.target.id)
	}
	
	return (
	<>
		
			<div className="container-fluid d-flex justify-content-center">
            	<div className="bg-dark" style={{width:"70px", height:"100px"}}></div>
        	</div>
			<div className="container-fluid trafic-light d-block justify-content-center" onClick={turnLight}>
				<div className= {"light red"+(LightColor==='red' ? " glow":"")} id="red"></div>
				<div className= {"light yellow" +(LightColor==='yellow' ? " glow":"")} id="yellow"></div>
				<div className= {"light green" +(LightColor==='green' ? " glow":"")} id="green"></div>
				{ (Purple) ? <PurpleLight/> : null}				
			</div>
			<div class="d-flex justify-content-center">
				<button type="button" class="btn btn-primary m-3" onClick={toggleColor}>{(Purple ? "Remove Purple" : "Add Purple")}</button>
				<button type="button" class="btn btn-primary m-3" onClick={Cycling}>Cycle Light</button>
			</div>
			
	</>
	);
};

export default Home;
