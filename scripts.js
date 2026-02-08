const nobtn = document.getElementById('bt2')
const yesbtn = document.getElementById('bt1')

const messages = [
    "Are you sure? 😢", "Think again 🤔", "Pleaseeee 🥺", "Don’t break my heart 💔", "Last chance 😶"
]
let i=0

function moveButton(){
    const screenWidth=window.innerWidth
    const screenHeight=window.innerHeight
    const btnWidth=nobtn.offsetWidth  //100
    const btnHeight=nobtn.offsetHeight //40
    const randomX=Math.random()*(screenWidth-btnWidth-20)
    const randomY=Math.random()*(screenHeight-btnHeight-20)
    nobtn.style.position='absolute';
    nobtn.style.left=randomX+'px'
    nobtn.style.top=randomY+'px'

    nobtn.innerText=messages[i]
    i++;
    if (i===messages.length){
        i=0;
    }
    

}

nobtn.addEventListener("mouseover",moveButton)
nobtn.addEventListener("touchstart",(e)=>{
    e.preventDefault();
    moveButton();
});


yesbtn.addEventListener('click',()=>{
    const song = new Audio("images/bgSong.mpeg");
    song.loop = true;
    song.volume = 0.8;
    song.play();

    document.body.innerHTML =`
    <div style=" height:100vh; display:flex; justify-content:center; align-items:center; flex-direction:column; background:lightpink; text-align:center; 
            background-image: url('images/heart.gif');
            background-size: cover;
            background-position: bottom;
            background-repeat: no-repeat; ">
            <h1>💖 YAY!!! 💖</h1>
            <p>Best decision ever 😘</p>
            <img src="images/love.webp" width="260" height="300px" style="border-radius:10px; border:1px solid">
            <h2 style='font-size:30px'>I love you ❤️</h2>
    </div>
    `
})

