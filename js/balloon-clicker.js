var game = new Phaser.Game(400, 400, Phaser.AUTO, 'balloon-clicker', { preload: preload, create: create, update: update });

function preload() {

    //  37x45 is the size of each frame
    //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
    //  blank frames at the end, so we tell the loader how many to load
    game.load.spritesheet('peach', 'assets/sprites/balloon_princess_peach_sprite_sheet_by_AsylusGoji91.png', 33, 61, 3);

}

var peach;
var cursors;

function create() {

    peach = game.add.sprite(40, 100, 'peach');

    peach.animations.add('move', [0,1,2], 5, true);

    //  Our controls.
    cursors = game.input.keyboard.createCursorKeys();

}

//  update isn't called until 'create' has completed. If you need to process stuff before that point (i.e. while the preload is still happening)
//  then create a function called loadUpdate() and use that
function update() {

    if (cursors.left.isDown) {
        peach.animations.play('move');
    }
    else if (cursors.right.isDown) {
        peach.animations.play('move');
    }
    else {
        peach.animations.stop();
        peach.frame = 0;
    }

}
