let informations_element = document.querySelector('.js-informations');
let boxInformations = {};


const box = document.querySelector('.js-box');
let BoxRect = box.getBoundingClientRect();


document.body.onmousemove = (event) => {

	// boxInformations = {
	// 	clientX: event.clientX,
	// 	clientY: event.clientY
	// };

	update();
};


box.onmousemove = (event, element) => {
	// console.log(BoxRect);
	boxInformations = {
		BoxClientX: event.clientX - BoxRect.left,
		BoxClientY: event.clientY - BoxRect.top,
		BoxClientXMiddle: ( event.clientX - BoxRect.left ) - ( box.clientWidth / 2 ),	
		BoxClientYMiddle: ( event.clientY - BoxRect.top ) - ( box.clientHeight / 2 )	
	};

	if ( boxInformations.BoxClientYMiddle > 0 ) {
		box.style.transform = "translateY(" + ( boxInformations.BoxClientYMiddle / 10 ) + "px)";
	}

	if ( boxInformations.BoxClientYMiddle < 0 ) {
		box.style.transform = "translateY(" + ( boxInformations.BoxClientYMiddle / -10 ) + "px)";
	}

	if ( boxInformations.BoxClientXMiddle > 0 ) {
		box.style.transform = "translateX(" + ( boxInformations.BoxClientXMiddle / 10 ) + "px)";
	}

	if ( boxInformations.BoxClientXMiddle < 0 ) {
		box.style.transform = "translateX(" + ( boxInformations.BoxClientXMiddle / -10 ) + "px)";
	}
};

box.onmouseout = () => {
	box.style.transform = '';
}


/**
 * Update
 */
function update() {
	BoxRect = box.getBoundingClientRect();

	// First clear information box
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


/**
 * Onload
 */
window.onload = function() {
	// Update informations
	update();
	window.onresize = update;
};