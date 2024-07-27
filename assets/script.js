function toggleMode(){
    const html = document.documentElement
    html.classList.toggle("dark")

    const img = document.querySelector("#profile img", )
    if (html.classList.contains("dark")) {
        
        img.setAttribute("src", "./eu png.png", )

    } 
     
    else { 

        img.setAttribute("src", "./Est.png", "./Greninja-AttackAnimation-XY-3.webp")
        
    }
}
