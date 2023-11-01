function showLanguage(){
    const language = document.getElementById('language-content');
    const buttonLanguage = document.querySelector('.language');

    buttonLanguage.addEventListener('click', () =>{
        if(language.style.display==='none'){
            language.style.display = 'block'
        }else{
            language.style.display = 'none';
        }
    })
}

function showSkills(){
    const divSkills = document.getElementById('skills-content');
    const buttonSkills = document.querySelector('.skills');

    buttonSkills.addEventListener('click', ()=>{
        if(divSkills.style.display === 'none'){
            divSkills.style.display = 'block';
        }else{
            divSkills.style.display = 'none';
        }
    })
}

function showEducation(){
    const divEducationBox = document.querySelector('.educationBox');
    const buttonEducation = document.querySelector('.education');

    buttonEducation.addEventListener('click', ()=>{
        if(divEducationBox.style.display === 'none'){
            divEducationBox.style.display = 'block';
        }else{
            divEducationBox.style.display = 'none';
        }
    })
}

function showPortfolio(){
    const divPortifolioBox = document.querySelector('.portifolioBox');
    const buttonPortifolio = document.querySelector('.portifolio');

    buttonPortifolio.addEventListener('click', ()=>{
        if(divPortifolioBox.style.display === 'none'){
            divPortifolioBox.style.display = 'block';
        }else{
            divPortifolioBox.style.display = 'none';
        }
    })
}

function showExperience(){
    const boxExperience = document.querySelector('.experienceBox');
    const buttonExperience = document.querySelector('.experience');

    buttonExperience.addEventListener('click', ()=>{
        if(boxExperience.style.display === 'none'){
            boxExperience.style.display = 'block';
        }else{
            boxExperience.style.display = 'none';
        }
    })
}

const buttons = document.querySelectorAll('.rotate');
buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        button.classList.toggle('rotate');
    });
})

showLanguage();
showSkills();
showEducation();
showPortfolio();
showExperience();



