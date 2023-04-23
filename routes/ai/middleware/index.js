import creditCheck from './creditCheck.js';
import contentFilterCheck from './contentFilterCheck.js';
import sendResponse from './sendResponse.js';
import creditPayment from './creditPayment.js';
import saveToHistory from './saveToHistory.js';

const  initMiddleware = async (req, res, next) => {
	req.locals = {}

	// Ensure N (number of generations) is no less than 1 or more than 10 
	// Number of credits to be used
	let { n } = req.body
	if(!n){
		n = 1
	} else {
		if(n > 10) {
			n = 10
		}
		if(n < 1) {
			n = 1
		}
		n = Math.round(n)
	}
	req.body.n = n
	next()
}

const checks = {
	initMiddleware,
	contentFilterCheck,
	sendResponse,
	creditCheck,
	creditPayment,
	saveToHistory,
}

 export default initMiddleware;

