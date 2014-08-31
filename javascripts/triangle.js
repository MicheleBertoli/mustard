
var Triangle = function (view) {
	this.view = view;
	var center = new Point(this.view.center.x, this.view.center.y);
	this.polygon = new Path.RegularPolygon(center, 3, 15);
	this.polygon.strokeColor = '#fff';
}

Triangle.prototype.animate = function (rotation) {
	if (this.polygon.bounds.width < this.view.size.width * 3.14 && 
		this.polygon.bounds.height < this.view.size.height * 3.14) {
		this.polygon.scale(1.05);
		this.polygon.rotate(rotation);
	} else {
		this.polygon.visible = false;
	}
}

Triangle.prototype.isVisible = function () {
	return this.polygon.visible;
}

Triangle.prototype.remove = function () {
	this.polygon.remove();
}