var RemovePointTool = function(x, y) {
	Tool.call(this, x, y);
	this.toolName = "Remove point";
};
RemovePointTool.prototype = Object.create(Tool.prototype);
RemovePointTool.prototype.onClicked = function() {
	if (!contourManager.contour) {
		return null;
	}
	var contour = contourManager.contour;
	var maxDist = 4 * nav.camera.scaleRatio;
    for (var i = 0; i < contour.points.length; i++) {
        if (dist(contour.points[i].x, contour.points[i].y, getMouseX(), getMouseY()) < maxDist) {
            contour.points.splice(i, 1);
            if (contour.points.length === 1) {
                contour.closed = false;
            }
            return null;
        }
    }
};
RemovePointTool.prototype.onPressed = function() {
	Tool.prototype.onPressed.call(this);
};
RemovePointTool.prototype.onReleased = function() {
	Tool.prototype.onReleased.call(this);
};
RemovePointTool.prototype.update = function() {
	Tool.prototype.update.call(this);
};
RemovePointTool.prototype.draw = function() {
	Tool.prototype.draw.call(this);
	var x = this.x + 5;
	var y = this.y + 5;
	pushMatrix();
	translate(x+2, y+1);
	scale(1.3, 1.3);
	noStroke();
	fill(255, 255, 255);
	rect(-1, 1, 6, 2);
	//rect(1, -1, 2, 6);
	stroke(0, 0, 0);
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
	// pen/
	ctx.strokeStyle = '#000000';
	ctx.save();
	ctx.beginPath();
	ctx.moveTo(0.6, 13.7);
	ctx.lineTo(3.2, 6.1);
	ctx.lineTo(7.9, 3.9);
	ctx.lineTo(7.6, 2.7);
	ctx.lineTo(9.3, 1.4);
	ctx.lineTo(14.0, 5.8);
	ctx.lineTo(12.1, 7.6);
	ctx.lineTo(11.3, 7.2);
	ctx.lineTo(8.9, 11.6);
	ctx.lineTo(1.6, 14.7);
	ctx.lineTo(0.6, 13.7);
	ctx.closePath();
	ctx.fillStyle = "rgb(255, 255, 255)";
	ctx.fill();
	ctx.stroke();

	// pen/
	ctx.beginPath();
	ctx.moveTo(1.1, 14.2);
	ctx.lineTo(5.7, 9.6);
	ctx.stroke();

	// pen/
	ctx.beginPath();
	ctx.moveTo(7.3, 9.0);
	ctx.bezierCurveTo(7.3, 9.6, 6.8, 10.0, 6.3, 10.0);
	ctx.bezierCurveTo(5.7, 10.0, 5.3, 9.6, 5.3, 9.0);
	ctx.bezierCurveTo(5.3, 8.4, 5.7, 8.0, 6.3, 8.0);
	ctx.bezierCurveTo(6.8, 8.0, 7.3, 8.4, 7.3, 9.0);
	ctx.closePath();
	ctx.fillStyle = "rgb(0, 0, 0)";
	ctx.fill();

	// pen/
	ctx.beginPath();
	ctx.moveTo(7.9, 3.9);
	ctx.lineTo(11.3, 7.2);
	ctx.stroke();
	ctx.restore();
	popMatrix();
};