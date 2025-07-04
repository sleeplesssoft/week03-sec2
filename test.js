import { getContext, keys } from "./week03-module.js";

document.addEventListener("DOMContentLoaded", (ev)=>{
	// coding here!
	const ctx = getContext("#myCanvas");

	const player ={
		x : 400,
		y : 300,
		color : "red",
		size : 50, // width = height
	};

	function draw() {
		// clear canvas (clear pixel/render buffer)
		//ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.fillStyle = "gray";
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

		// update input/data
		if (keys["a"]) {
			player.x -= 0.5;
		}
		if (keys["d"]) {
			player.x += 0.5;
		}

		// transfrom, render
		ctx.save();
		// transform
		ctx.translate(player.x, player.y);
		// render
		ctx.fillStyle = player.color;
		ctx.fillRect(
			-player.size / 2, // x
			-player.size / 2, // y
			player.size, // width
			player.size // height
		);
		ctx.restore();


		requestAnimationFrame(draw);
	}
	draw();
});