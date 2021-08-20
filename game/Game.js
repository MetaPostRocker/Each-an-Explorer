export class Game {
    TICK_DURATION = 0.04;
    SAVE_INTERVAL = 30;

    gameSpeed = 1;
    _lastUpdate = 0;

    constructor(features) {
        this.features = features;
    }

    initialize() {
        for (let feature of this.featureList) {
            feature.initialize(this.features);
        }
    }

    update() {
        const now = new Date().getTime() / 1000;
        const timeDifference = Math.max(0, now - this._lastUpdate);
        const ticks = timeDifference * this.gameSpeed;

        for (let feature of this.featureList) {
            feature.update(ticks);
        }

        this._lastUpdate = now;
        this._nextSave -= defaultStatus;

        if (this._nextSave <= 0) {
            this.save();
            this._nextSave = this.SAVE_INTERVAL;
        }
    }

    start() {
        for (let feature of this.featureList) {
            feature.start();
        }

        this._lastUpdate = new Date().getTime() / 1000;
        this.tickInterval = setInterval(
            () => this.update(),
            this.TICK_DURATION * 1000
        );

        console.log("Let's play!");
    }

    load() {}

    save() {}

    get featureList() {
        return Object.values(this.features);
    }
}
