function showAbout(type){
    const homepage = document.getElementById('home')
    const aboutpage = document.getElementById('about')
    const skillpage = document.getElementById('skill')

    if (type == 'about'){
        aboutpage.style.display = "flex";
        homepage.style.display = "none";
        skillpage.style.display = "none";
    } else if(type == 'home'){
        aboutpage.style.display = "none";
        homepage.style.display = "flex";
        skillpage.style.display = "none";
    }else if(type == 'skill'){
        aboutpage.style.display = "none";
        homepage.style.display = "none";
        skillpage.style.display = "block";
    }
}
