function showAbout(type){
    const homepage = document.getElementById('home')
    const aboutpage = document.getElementById('about')

    if (type == 'about'){
        aboutpage.style.display = "flex";
        homepage.style.display = "none";
    } else if(type == 'home'){
        aboutpage.style.display = "none";
        homepage.style.display = "flex";
    }
}
