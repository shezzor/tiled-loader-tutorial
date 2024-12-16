import { Scene } from 'engine/Scene.js';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from 'game/constants/game.js';

export class TestScene extends Scene {
	constructor() {
		super();
	}

	update(time, _, camera) {
		camera.update(time);
	}

	draw(context) {
		context.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
	}
}
