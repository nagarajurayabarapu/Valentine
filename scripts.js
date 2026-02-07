const nobtn = document.getElementById('bt2')
const yesbtn = document.getElementById('bt1')

const messages = [
    "Are you sure? 😢", "Think again 🤔", "Pleaseeee 🥺", "Don’t break my heart 💔", "Last chance 😶"
]
let i=0
nobtn.addEventListener("mouseover",()=>{
    const x=Math.random()*(700-150);
    const y=Math.random()*(300-150);

    nobtn.style.left=x+'px'
    nobtn.style.top=y+'px'

    nobtn.innerText=messages[i]
    i++;
    if (i===messages.length){
        i=0;
    }
})

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

