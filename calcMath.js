//Variable Instantiation

let mainWrapper = document.getElementById("main-wrapper");
let count = 0;
let deviceLimit = 10;

function newDevice() {
	if (!(count >= deviceLimit)) {
		let divPlaceholder = document.createElement("div");

		let carrierInp = document.createElement("input");
		let carrierPlan = document.createElement("input");

		carrierInp.setAttribute("class", "carrier-input");
		carrierPlan.setAttribute("class", "carrier-plan");

		divPlaceholder.setAttribute("class", "device-wrapper");
		divPlaceholder.style.backgroundColor = "var(--oslWhite)";
		divPlaceholder.style.border = "1px solid var(--oslLightGrey)";
		divPlaceholder.style.borderRadius = "25px";
		divPlaceholder.style.marginTop = "5px";

		divPlaceholder.appendChild(carrierInp);
		divPlaceholder.appendChild(carrierPlan);

		mainWrapper.appendChild(divPlaceholder);
		count++;
	}
}
