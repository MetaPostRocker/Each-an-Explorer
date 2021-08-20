export class Controller {
    TICK_DURATION = 0.04;

    constructor(controllers) {
        this.controllers = controllers;
    }

    initialize() {
        for (let controller of this.controllerList) {
            controller.initialize();
        }
    }

    start() {
        this.tickInterval = setInterval(
            () => this.update(),
            this.TICK_DURATION * 1000
        );
    }

    update() {
        for (let controller of this.controllerList) {
            controller.update();
        }
    }

    get controllerList() {
        return Object.values(this.controllers);
    }
}
