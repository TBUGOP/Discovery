//functionality for the planet-spotting-menu
const finder_buttons= document.querySelectorAll(".finder span");

finder_buttons.forEach(finder=>{
    finder.addEventListener('click', ()=>{
        finder.classList.toggle('selected');
        finder.classList.forEach(classList_ele=>{
            if(classList_ele!='selected'){
                const ele=document.querySelector("#"+classList_ele);
                ele.classList.toggle("point_on");
            }
        });
    });
});

//functionality for the play/pause button
const planets= document.querySelectorAll(".planet");
const playState= document.querySelector(".playState");
const playSt= document.querySelector(".play");
const pauseSt= document.querySelector(".pause");

playState.addEventListener('click',()=>{
    playSt.classList.toggle("hidden");
    pauseSt.classList.toggle("hidden");
    
    const runPause= playSt.classList.contains("hidden") ? "running": "paused";
    setRunPause(runPause);
});

const setRunPause=(runPause)=>{
    planets.forEach(planet=>{
        planet.style.animationPlayState = runPause;
    });
}

//functionality for the zoom In/Out button
const zoomState= document.querySelector(".zoomState");
const solarSystem= document.querySelector(".solarSystem");
zoomState.addEventListener('click',()=>{
    zoomState.classList.toggle("zoomInState");
    solarSystem.style.transform= solarSystem.style.transform=="scale(0.6)" ? "scale(1)": "scale(0.6)";
});

//functionality for the size of Sun
const sunState= document.querySelector(".sunState");
const sunModel= document.querySelector(".sunModel");
const sun= document.querySelector(".sun");
sunState.addEventListener('click',()=>{
    sunModel.classList.toggle("sunMiniState");
    sun.classList.toggle("mini");
    planets.forEach(planet=>{
        planet.classList.toggle("motionMiniSun");
    })
});
