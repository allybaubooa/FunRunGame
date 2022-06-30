
    let character = document.getElementById('dog');
    let block = document.getElementById('block');
    let layout = document.getElementById('layout');

    let initial_pos = block.getBoundingClientRect().left;
    let pos_dog = character.getBoundingClientRect().top;
    let layout_top = layout.getBoundingClientRect().top;
    let layout_left = layout.getBoundingClientRect().left;
    // console.log(pos_dog);

// Movement of the block and score incrementation
    let pos_block = initial_pos - layout_left; // 780-200
    let  score = 0;
    let move_left = setInterval(function (){
        if (pos_block <= -20){
            score++
            pos_block = initial_pos - layout_left;
            // console.log(score);
            document.querySelector('p').textContent = 'Score: '+ score.toString();
        }
        else {
            block.style.left = pos_block + 'px';
        }
        pos_block--
    },0.1)

// Character Jump
function jump(){
        let pos = pos_dog - layout_top; //600 - 250
        let pos2 = pos_dog - (layout_top + 100); //600 -350
    let move_top = setInterval(function (){
        if (pos <= pos2) {
            character.style.top = pos2 + 'px'
            if (pos2 > pos_dog - layout_top){
                clearInterval(move_top)
            }
            pos2++
        }
        else {
            character.style.top = pos + 'px';
        }
        pos--
    },0.1)
}


// Jump Sound
function jump_sound(){
        let audio = new Audio('https://www.themushroomkingdom.net/sounds/wav/smb/smb_jump-small.wav')
        audio.play();
}

// Collide Sound
function collide_sound(){
        let audio = new Audio('https://themushroomkingdom.net/sounds/wav/smb/smb_bump.wav')
        audio.play();
}

//     let block_width = block.getBoundingClientRect().left;
//     let character_top = character.getBoundingClientRect().top;

    //Check if both divs collide / Stop animation when they collide.
let check_collision = setInterval(function (){
    let block_width = Math.round(block.getBoundingClientRect().left - layout_left);
    let character_top = Math.round(character.getBoundingClientRect().top - layout_top);
     //console.log(block_width);
    //console.log(character_top);

    if(block_width < 100 && block_width > 0 && character_top >= pos_dog - layout_top
        ){
        collide_sound();
        clearInterval(check_collision);
        clearInterval(move_left);
        alert("Game Over");
    }
},0.1);

// Increasing Balls

// let ball_size = setInterval(function (){
//     let block_width = block.getBoundingClientRect().width
//     let block_height = block.getBoundingClientRect().height
//     console.log(block_width)
//     console.log(score);
//     if (score % 2 == 0 && score != 0){
//         block.style.width = block_width + 'px';
//         block.style.height = block_height + 'px';
//     }
//     block_width+=10
//     block_height+=10
// },0.5)