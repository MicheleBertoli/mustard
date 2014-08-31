
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

window.addEventListener('load', load);

function load () {

	paper.install(window);
	paper.setup(canvas);

	var rotation = 0;
	var triangles = [];
	var tool = new paper.Tool();

	tool.onMouseMove = function (event) {
		var width = paper.view.size.width / 2;
		rotation = (event.point.x - width) / width;
	}

	paper.view.onFrame = function (event) {
		if (event.count % 5 === 0) {
			var triangle = new Triangle(paper.view);
			triangles.push(triangle);
		}
		for (var i = 0; i < triangles.length; i++) {
			var triangle = triangles[i];
			if (triangle.isVisible()) {
				triangle.animate(rotation);
			} else {
				triangles.splice(i, 1)[0].remove();
			}
		};
	}

	paper.view.draw();

}