
// svg ist fixiert
// es ist Global, in allen Funktionen geht es um svg

let running = false

function start() {
    running = true
    window.requestAnimationFrame(animationLoop)
}

function animationLoop() {
    
    //  Hier wird mit diesem Link svg circle verlinkt
    //
    const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle")
    

    
    // Hier überschreibt setAttribute EIgenschaften von Objekte, für die es kein äquivalentes HTML-Attribute gibt
    // mit Math.random kann man zufällige Zahlen zwischen 0 und 1 generieren
    let x = Math.random()
    let y = Math.random()
    dot.setAttribute("cx", x)
    dot.setAttribute("cy", y)
    dot.setAttribute("r", 0.01)
    dot.setAttribute("fill", "black")
    // Fügt Elemente an das Ende eines Fragments ein
    svg.appendChild(dot)

    // hier checkt man ob die Variabel true oder false ist
    // 
    if ( running === true ) {
        let inside= 0
        let total=0
        if(inside===total)

        window.requestAnimationFrame(animationLoop)
    }
    function start() {
        const elem = document.querySelector("#button")
        main.className = "start"
    }
    function stop() {
        const elem = document.querySelector("#button")
        main.className = "stop" 
    
    if (running === false ) 
    let loopCounter=0
        loopCounter=loopCounter + 1
        if (loopCounter < 1000) 
        prit= ("loopCounter")
        else if ( requestAnimationFrame>loopCounter)
        print=("requestAnimationFrame")

    
        window.requestAnimationFrame(animationLoop)
    }

    }

    
