
    let character = document.getElementById('dog');
    let block = document.getElementById('block');
    let block2 = document.getElementById('block2');
    let box = document.getElementById('layout');
    let initial_pos = block.getBoundingClientRect().left;
    let pos_dog = character.getBoundingClientRect().top;
    let score = document.getElementById('score');


    let pos_block = initial_pos;
        score = 0;
    let move_left = setInterval(function (){
        if (pos_block <= -40){
            score++
            pos_block = initial_pos;
            // console.log(score);
            document.querySelector('p').textContent = score;
        }
        else {
            block.style.left = pos_block + 'px';
        }
        pos_block--
    },0.1)


function jump(){
        let pos = pos_dog;
        let pos2 = 130;
    let move_top = setInterval(function (){
        if (pos < 130) {
            character.style.top = pos2 + 'px'
            if (pos2 > 180){
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

//     let block_width = block.getBoundingClientRect().left;
//     let character_top = character.getBoundingClientRect().top;

    //Check if both divs collide / Stop animation when they collide.
let check_collision = setInterval(function (){
    let block_width = Math.round(block.getBoundingClientRect().left);
    let character_top = Math.round(character.getBoundingClientRect().top);
    // console.log(block_width);

    if(block_width < 20 && block_width > 0  && character_top >= pos_dog){
        alert("Lose");
        clearInterval(check_collision);
        clearInterval(move_left);
    }
},0.1);

//Increasing Score


