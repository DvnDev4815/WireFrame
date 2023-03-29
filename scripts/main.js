var enlo = {
    "Count": 0,
    "Bool": false
}

function toBegin(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

function ToArticulo1(){
    var elemento = document.getElementById("Articulo1")

    elemento.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center"
    })
}

function ToArticulo2(){
    var elemento= document.getElementById("Articulo2")

    elemento.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center"
    })
}

function ToArticulo3(){
    var element= document.getElementById("Articulo3")

    element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center"
    })
}

document,addEventListener("keydown", (event) => {
    if(event.code === "KeyD" && event.code === "KeyV", event.code === "KeyN"){
        enlo.Count += 1
        if(enlo.Count % 2 === 1){
            alert("Truco activado")
            window.location.href= "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }    
    }
})