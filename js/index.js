let p1_val,p2_val = 0;

let imageGenerator = (value) =>{
    allImages = {
        1: 'images/dice1.png',
        2: 'images/dice2.png',
        3: 'images/dice3.png',
        4: 'images/dice4.png',
        5: 'images/dice5.png',
        6: 'images/dice6.png',
    }
    return allImages[Number(value)];
}

findRandom = () =>{
    let randomNumber = Math.floor(Math.random() * 6) +1
    return randomNumber;
}

let setPlayerOne = () =>{
   let img1 = document.querySelector('.img1').attributes.src;
   p1_val = findRandom()
   img1.value = imageGenerator(p1_val)
}

let setPlayerTwo = () =>{
    let img2 = document.querySelector('.img2').attributes.src;
    p2_val = findRandom()
    img2.value = imageGenerator(p2_val)
}

let pos_evaluator= (p1,p2) =>{
    if(p1 > p2){
        document.querySelector('h1').innerText = "Player 1 wins"
    }else if(p2 > p1){
        document.querySelector('h1').innerText = "Player 2 wins"
    }else if(p1 == p2){
        document.querySelector('h1').innerText = "Draw"
    }
}

console.log(imageGenerator(findRandom()))
setPlayerOne();
setPlayerTwo();
pos_evaluator(p1_val, p2_val)