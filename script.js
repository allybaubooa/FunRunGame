
    let character = document.getElementById('dog');
    let block = document.getElementById('block');
    let layout = document.getElementById('layout');
    let start_btn = document.getElementById('button-start');
    let retry = document.getElementById('retry');
    let btnArr = [start_btn, retry];
    let volume_off = document.getElementById('off');

    let initial_pos = block.getBoundingClientRect().left;
    let pos_dog = character.getBoundingClientRect().top;
    let layout_top = layout.getBoundingClientRect().top;
    let layout_left = layout.getBoundingClientRect().left;
    let score;

    // console.log(pos_dog);

// Character Jump
function jump(){
        let pos = pos_dog - layout_top; //600 - 250
        let pos2 = pos_dog - (layout_top + 150); //600 -350
         character.classList.remove('fa-bounce')
         jump_sound();
    let move_top = setInterval(function (){
        if (pos <= pos2) {
            character.style.top = pos2 + 'px'
            if (pos2 > pos_dog - layout_top){
                clearInterval(move_top)
                character.classList.add('fa-bounce')
            }
            pos2+=2
        }
        else {
            character.style.top = pos + 'px';
        }
        pos-=2
    },0.1)
}


// Sounds
function jump_sound(){
        let audio = new Audio('https://www.themushroomkingdom.net/sounds/wav/smb/smb_jump-small.wav')
        audio.play();
}

function start_sound(){
        let audio = new Audio('https://themushroomkingdom.net/sounds/wav/smsunshine/smsunshine_mario_here_we_go.wav')
        audio.play();
}

function click_sound(){
        let audio = new Audio('https://themushroomkingdom.net/sounds/wav/smw2/smw2_key_get.wav')
        audio.play();
}

//start game btn pressed. (added movement of block and collision cheque in the event listener)
let start_layout = document.getElementById('layout_game');

 // added for each loop to add event listener on more buttons.
 btnArr.forEach(btn =>
    btn.addEventListener('click',function (ev) {
        if(btn === start_btn){
        start_layout.classList.toggle('hide');
        // store_name ();
        // retrieve_name();
        }
// Movement of the block and score incrementation
        let pos_block = initial_pos - layout_left; // 780-200
            score = 0;
        let move_left = setInterval(function () {
            if (pos_block <= -20) {
                score++
                pos_block = initial_pos - layout_left;
                // console.log(score);
                document.getElementById('score').textContent = 'Score: ' + score.toString();
            } else {
                block.style.left = pos_block + 'px';
            }
            // Increase speed of ball // Need to fix
                    pos_block-=2
            return score;
        }, 0.1)
//Check if both divs collide / Stop animation when they collide.
        let check_collision = setInterval(function () {
            let block_width = Math.round(block.getBoundingClientRect().left - layout_left);
            let character_top = Math.round(character.getBoundingClientRect().top - layout_top);

            if (block_width < 100 && block_width > 0 && character_top >= pos_dog - layout_top
            ) {
                //collide_sound();
                clearInterval(check_collision);
                clearInterval(move_left);
                gameLost();
                return score;
            }
        }, 0.1);

// Increasing Balls/Change Shape
//
// let block_shape = setInterval(function (){
//     // console.log(score);
//         if (score % 5 == 0 && score != 0){
//
//             block.style.borderRadius = 0 + 'px';
//         }
//         else {
//             block.style.borderRadius = 30 + 'px';
//         }
//         },0.5)
    })
 )
// Function to display Retry/Back icon when Lost
let back = document.getElementById('back');

function gameLost (){
    document.getElementById('lose').innerHTML = "You Lost! Do you want to try Again?";
    document.getElementById('show-icon').classList.add('appear');
}

retry.addEventListener('click', function (){
    document.getElementById('lose').innerHTML = "";
    document.getElementById('show-icon').classList.remove('appear');
    score = 0
    document.getElementById('score').textContent = 'Score: ' + score.toString();
})

back.addEventListener("click", function (){
    document.getElementById('lose').innerHTML = "";
    document.getElementById('show-icon').classList.remove('appear');
    score = 0
    document.getElementById('score').textContent = 'Score: ' + score.toString();
    start_layout.classList.toggle('hide');
})

//Modal for high_score
    let high_score = document.getElementById('button-score');
    let modal_container = document.getElementById('modal-container');
    let close = document.getElementById('close');

    high_score.addEventListener('click',function (ev){
        modal_container.classList.add('modal-show')
    })

     close.addEventListener('click',function (ev){
        modal_container.classList.remove('modal-show');
    });

//Modal for Gameplay Instruction
    let instruction = document.getElementById('button-instruction');
    let modal_containerIns = document.getElementById('modal-instruction')
    let closeIns = document.getElementById('closeIns');

    instruction.addEventListener("click", function (ev){
    modal_containerIns.classList.add('modal-showIns');
    });

         closeIns.addEventListener('click',function (ev){
        modal_containerIns.classList.remove('modal-showIns');
    });

// High_score Store and Retrieve
//     let input = document.getElementById('front_name');
//     let output = document.getElementById('output');
//     let retrieve = document.getElementById('retrieve')
//
// start_btn.addEventListener("click", function store_name(){
//     let current_name = localStorage.getItem('input');
//     localStorage.setItem('input', input.value);
// })
//     let current_score = localStorage.getItem('score')
//     let hs = setInterval(function (){
//         if (score === 0){
//             localStorage.setItem('score', score.value)
//         }
//         else {
//             let hs_str = input.value + ',' + current_score;
//             let hs_arr = hs_str.split(',');
//             let hs_desc = hs_arr.sort((a,b) => b - a); // b-a converts to number
//             let hs_top_5 = hs_desc.slice(0,5);
//             console.log(hs_top_5);
//             localStorage.setItem('input', hs_top_5.toString());
//         }
//     },0.1)

// function store_score(){
//     let current_score = localStorage.getItem('score');
//     if (current_score === null){
//         localStorage.setItem('score', score.value);
//     }
//     else {
//         localStorage.setItem('score', current_score.toString());
//     }
// }
//
//
// function retrieve_name(){
//     let input_value = localStorage.getItem('input')
//     console.log(input_value);
//     output.value = input_value;
// }