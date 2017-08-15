let informations_element = document.querySelector('.js-informations');
let boxInformations = {};

const box = document.querySelector('.js-box');

// Update informations
update();
window.onresize = update;

document.body.onmousemove = function(event) {

	boxInformations = {
		clientX: event.clientX,
		clientY: event.clientY
	};

	update();
};


/**
 * Update
 */
function update() {
	// First clear infomrations box
	informations_element.innerHTML = '';

	Object.assign(boxInformations, {
		clientHeight: `${box.clientHeight}px`,
		clientWidth: `${box.clientWidth}px`,
		offsetTop: `${box.offsetTop}px`,
		offsetLeft: `${box.offsetLeft}px` 
	});

	for ( var key in boxInformations) {

		var node = document.createElement('div');            
		var textnode = document.createTextNode(`${key}: ${boxInformations[key]}`);
		
		node.appendChild(textnode);                         
		
		informations_element.appendChild(node);
	}
};