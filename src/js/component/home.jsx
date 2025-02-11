import React,{useState} from "react";


//create your first component

let initialCycle = 1;

const Home = () => {


	const [purple, setPurple] = useState(false);
	const [lightColor, setLightColor] = useState('red');

	function cycling (){
		if (initialCycle===0) {setLightColor('red')}
		if (initialCycle===1) {setLightColor('yellow')}
		if (initialCycle===2) {setLightColor('green')}
		if (initialCycle===3) {setLightColor('purple')}
		initialCycle++
		if (purple) { if (initialCycle===4) initialCycle=0 }
		else {if (initialCycle===3) initialCycle=0}
	}

	function turnLight(e) {
		if (e.target.id==="red") {setLightColor('red')}
		if (e.target.id==="yellow") {setLightColor('yellow')}
		if (e.target.id==="green") {setLightColor('green')}
		if (e.target.id==="purple") {setLightColor('purple')}
	}
	
	return (
	<>
		
			<div className="container-fluid d-flex justify-content-center">
            	<div className="bg-dark" style={{width:"70px", height:"100px"}}></div>
        	</div>
			<div className="container-fluid trafic-light d-block justify-content-center" onClick={turnLight}>
				<div className= {"light red"+(lightColor==='red' ? " glow":"")} id="red"></div>
				<div className= {"light yellow" +(lightColor==='yellow' ? " glow":"")} id="yellow"></div>
				<div className= {"light green" +(lightColor==='green' ? " glow":"")} id="green"></div>
				{ (purple) ? <div className= {"light purple" +(lightColor==='purple' ? " glow":"")} id="purple"></div> : null}				
			</div>
			<div className="d-flex justify-content-center">
				<button type="button" className="btn btn-primary m-3" onClick={()=>setPurple(!purple)}>{(purple ? "Remove Purple" : "Add Purple")}</button>
				<button type="button" className="btn btn-primary m-3" onClick={cycling}>Cycle Light</button>
			</div>
			
	</>
	);
};

export default Home;
