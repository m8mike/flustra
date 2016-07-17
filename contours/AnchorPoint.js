var AnchorPoint = function(x, y) {
    this.x = x;
    this.y = y;
    this.visible = false;
};
AnchorPoint.prototype.draw = function() {
    if (this.visible) {
        ellipse(this.x, this.y, 3, 3);
    }
};