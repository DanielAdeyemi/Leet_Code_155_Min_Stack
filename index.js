// First solution with 1 stack and min value inside each stack item
var MinStack = function () {
	this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
	if (this.stack.length == 0) {
		this.stack.push([val, val]);
		return;
	}
	if (this.stack[this.stack.length - 1][1] < val) {
		this.stack.push([val, this.stack[this.stack.length - 1][1]]);
	} else {
		this.stack.push([val, val]);
	}
	return;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	this.stack.pop();
	return;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	if (this.stack.length == 0) return null;
	return this.stack[this.stack.length - 1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	return this.stack[this.stack.length - 1][1];
};

// Second solution with additional stack

var MinStack = function () {
	this.stack = [];
	this.min = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
	this.stack.push(val);
	if (this.min[this.min.length - 1] >= val || this.min.length == 0) {
		this.min.push(val);
	}
	return;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	this.stack.pop();
	let x = this.stack.pop();
	if (this.min[this.min.length - 1] == x) this.min.pop();
	return;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	if (this.stack.length == 0) return null;
	return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	if (this.min.length == 0) return null;
	return this.min[this.min.length - 1];
};
