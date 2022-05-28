


let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                x: 0,
                y: 1000
            }
        }
    },
    scene: [Menu, Lvl1,Lvl2,Lvl3,Lvl4,Lvl5,Lvl6,Lvl7,Lvl8,Lvl9,Lvl10,Lvl11,Lvl12, tester]
}
let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT, KeyUp, keyDown, keyA, keyD, keyW, keyS;
let cursors;
let inZone;
let pushorpull;
let onladder;
let onladderUp;
let leftstopcheck;
let rightstopcheck;