const catButton = document.getElementById("catButton");
const catOutput = document.getElementById("catOutput");

function describe(pet){
	return pet.name + " comes from " + pet.origin + ".";
}

catButton.addEventListener("click", function() {
	catOutput.innerHTML ="";
	
	pets.forEach(function(pet) {
			const paragraph = document.createElement("p");
			
			paragraph.textContent = describe(pet);
			
			catOutput.appendChild(paragraph);
	});
	});