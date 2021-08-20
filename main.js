import { Game } from './game/Game.js';
import { Controller } from './ui/Controller.js';
import { Wallet } from './game/features/wallet/Wallet.js';
import { WalletController } from './ui/WalletController.js';

function start() {
    const features = {
        wallet: new Wallet(),
    };

    const game = new Game(features);
    game.initialize();
    game.load();
    game.start();

    const controllers = {
        walletController: new WalletController(features.wallet),
    };

    const ui = new Controller(controllers);
    ui.initialize();
    ui.start();
}

window.onload = start;

// start();

// console.log(2);

// const clicker = document.querySelector('.clicker');
// const points = document.querySelector('.points');
// var pointsVal = 0;

// clicker.addEventListener('click', handlClick);

// function handlClick(e) {
//     // console.log('Got here!');
//     points.innerHTML = pointsVal;
//     pointsVal++;
// }
