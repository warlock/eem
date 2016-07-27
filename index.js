var ee = require('events');

module.exports = {
	func : {},
	on : function (ev, callback) {
		if (ev === undefined || ev === null || ev === "") throw new Error('Need event');
        else if (typeof callback !== 'function') throw Error('Event need function');
		else this.func[ev] = callback;
	},
	emit : function (ev, data) {
		if (ev === undefined || ev === null || ev === "") throw new Error('No event selected.');
		else if (typeof this.func[ev] === 'function') this.func[ev](data);
	},
	remove : function (ev) {
		if (ev === undefined || ev === null || ev === "") throw new Error('No event selected.');
		else if (this.func[ev] === undefined) throw Error('This event not exist');
		else delete this.func[ev];
	}
};
