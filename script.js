
    let character = document.getElementById('dog');
    let block = document.getElementById('block');
    let initial_pos = block.getBoundingClientRect().left;
    let pos_dog = character.getBoundingClientRect().top;
    let layout = document.getElementById('layout');


// Movement of the block and score incrementation
    let pos_block = initial_pos;
    let  score = 0;
    let move_left = setInterval(function (){
        if (pos_block <= -40){
            score++
            pos_block = initial_pos;
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
        let pos = pos_dog;
        let pos2 = pos_dog - 70;
    let move_top = setInterval(function (){
        if (pos < pos2) {
            character.style.top = pos2 + 'px'
            if (pos2 > pos_dog){
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
    let block_width = Math.round(block.getBoundingClientRect().left);
    let character_top = Math.round(character.getBoundingClientRect().top);
    // console.log(block_width);

    if(block_width < 40 && block_width > 0  && character_top >= pos_dog){
        collide_sound();
        clearInterval(check_collision);
        clearInterval(move_left);
        alert("Game Over");
    }
},0.1);

// Increasing Balls

// let ball_size = setInterval(function (){
//     console.log(score);
//     if (score % 2 === 0 || score != 0){
//         block.style.width = 30 + 'px';
//         block.style.height = 30 + 'px';
//     }
// },0.5)