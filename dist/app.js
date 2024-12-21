"use strict";
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["right"] = 2] = "right";
    direction[direction["left"] = 3] = "left";
})(direction || (direction = {}));
function doSomething(keyPressed) {
    if (keyPressed == direction.up) {
        console.log("You are going up!");
    }
    if (keyPressed == direction.down) {
        console.log("You are going down!");
    }
    if (keyPressed == direction.right) {
        console.log("You are going right!");
    }
    if (keyPressed == direction.left) {
        console.log("You are going left!");
    }
}
doSomething(direction.up);
