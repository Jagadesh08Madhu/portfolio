function showAbout(type){
    const homepage = document.getElementById('home')
    const aboutpage = document.getElementById('about')
    const skillpage = document.getElementById('skill')
    const projectpage = document.getElementById('project')
    const contactpage = document.getElementById('contact')

    if (type == 'about'){
        aboutpage.style.display = "flex";
        homepage.style.display = "none";
        skillpage.style.display = "none";
        projectpage.style.display= "none";
        contactpage.style.display= "none"
    } else if(type == 'home'){
        aboutpage.style.display = "none";
        homepage.style.display = "flex";
        skillpage.style.display = "none";
        projectpage.style.display= "none";
        contactpage.style.display= "none"
    }else if(type == 'skill'){
        aboutpage.style.display = "none";
        homepage.style.display = "none";
        skillpage.style.display = "block";
        projectpage.style.display= "none";
        contactpage.style.display= "none"
    }else if (type == 'project'){
        aboutpage.style.display = "none";
        homepage.style.display = "none";
        skillpage.style.display = "none";
        projectpage.style.display= "block";
        contactpage.style.display= "none"
    }else if(type == 'contact'){
        aboutpage.style.display = "none";
        homepage.style.display = "none";
        skillpage.style.display = "none";
        projectpage.style.display= "none";
        contactpage.style.display= "flex"
    }
}


