// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, planet) {
   // Here is the HTML formatting for our mission target div.

   const missionTarget = document.getElementById('missionTarget');

   missionTarget.innerHTML = `
         <ol>
         <li>Name: ${planet.name}</li>
         <li>Diameter: ${planet.diameter}</li>
         <li>Star: ${planet.star}</li>
         <li>Distance from Earth: ${planet.distance}</li>
         <li>Number of Moons: ${planet.moons}</li>
         </ol>
         <img src="${planet.image}">
         `;

}





function validateInput(testInput) {

   if (testInput === "") {
      return "Empty"
   }
   else if (isNaN(testInput)) {
      return "Not a number"
   }
   else if (isNaN(testInput) === false) {
      return "Is a Number"
   }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass, event) {
   let fuelStatus = document.getElementById('fuelStatus');
   let launchStatus = document.getElementById('launchStatus');
   let pilotStatus = document.getElementById('pilotStatus');
   let copilotStatus = document.getElementById('copilotStatus');

   if (pilot === "" || copilot === "" || fuelLevel === "" || cargoMass === "") {
      alert("All fields are required!");
      event.preventDefault();
   }
   else if ((validateInput(pilot) === 'Is a Number') || (validateInput(copilot) === 'Is a Number')) {
      alert("Pilot and copilot name should be string")

      event.preventDefault();
   }

   else if (isNaN((fuelLevel) || isNaN(cargoMass))) {
      alert("Fuel level & cargo mass should be number");
      event.preventDefault();

   }
   else {
      
      pilotStatus.innerHTML = `Pilot ${pilotName.value + ' '}Ready`
      copilotStatus.innerHTML = `Co-pilot ${copilotName.value + ' '}Ready`            
        
   }
         if((fuelLevel) < 10000 && (cargoMass) <= 10000) {    
         
         faultyItems.style.visibility = 'visible';
         fuelStatus.innerHTML = `Fuel level too low for the journey!`;
         cargoStatus.innerHTML = `Cargo mass low enough for launch`;
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         launchStatus.style.color = 'red';
         event.preventDefault();
      } 
         
   
       else if((fuelLevel) > 10000 && (cargoMass) >= 10000) {
     
         faultyItems.style.visibility = 'visible';
         cargoStatus.innerHTML = `Cargo mass too heavy for the shuttle to take off!`;
         fuelStatus.innerHTML = `Fuel level high enough for launch`;
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         launchStatus.style.color = 'red';
         event.preventDefault();
       }
             
      
      else if ((fuelLevel) < 10000 && (cargoMass) > 10000) {
         faultyItems.style.visibility = 'visible';
         launchStatus.innerHTML = `Shuttle is ready for launch`;
         launchStatus.style.color = 'red';
         fuelStatus.innerHTML = `Fuel level too low for the journey!`;
         cargoStatus.innerHTML = `Cargo mass too heavy for the shuttle to take off!`;
         event.preventDefault();
      }

     else if ((fuelLevel) >= 10000 && (cargoMass) <= 10000) {
         faultyItems.style.visibility = 'visible';
         launchStatus.innerHTML = `Shuttle is ready for launch`;
         launchStatus.style.color = 'green';
         fuelStatus.innerHTML = `Fuel level high enough for launch`;
         cargoStatus.innerHTML = `Cargo mass low enough for launch`;
         event.preventDefault();
     }
     else{
     event.preventDefault();
     }
   }


async function myFetch() {
   //let json = [];
   let planetsReturned
   planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
      return response.json();
   });
   return planetsReturned;
}

function pickPlanet(planets) {
   const index = Math.floor(Math.random() * planets.length - 1);
   return planets[index];
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
