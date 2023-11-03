function choose() {
    let one = document.querySelector("#one");
    let two = document.querySelector("#two");
    one.addEventListener("click", () => {
        document.querySelector(".tasbeh").style.display = "flex";
        document.querySelector(".tasbehDot").style.display = "none";
        one.style.background = "cadetblue"
        two.style.background = "transparent"
        
    })
    two.addEventListener("click", () => {
        document.querySelector(".tasbeh").style.display = "none";
        document.querySelector(".tasbehDot").style.display = "flex";
        two.style.background = "cadetblue"
        one.style.background = "transparent"
    })
}
function runThemes() {
    let radios = document.querySelectorAll('input[type="radio"]');
    let tasbeh = document.querySelector(".tasbeh");   
    let display = document.querySelector('.num');
    let a = 4;
    let bgClrs = ['#800080', '#dc143c', '#008000', '#000080', '#000035'];
    let txtClrs = ['yellow', 'lime', 'chartreuse', 'orange', 'purple']
    for (let i = 0; i <= a; i++){
        radios[i].onclick = () => {
            tasbeh.style.background = bgClrs[i];
            tasbeh.style.borderColor = txtClrs[i];
            display.style.color = bgClrs[i];
            display.style.webkitTextStrokeColor = txtClrs[i];
        }
    }
 
}
function number() {
    let zikr = ['Subhaanalloh', 'Alhamdulillah', 'Laa ilaaha illa Alloh', 'Allohu akbar', "Astag'firulloh", "Astag'firulloh allazii laa ilaaha illa huval hayyul qoyyum va atubu ilayh"]
    let num =  document.querySelector(".num");
    let txt = document.querySelector(".content"); 
    let btn = document.querySelector("#btn");
    let i = 0, a = 0;
    btn.onclick = ()=>{
        if (i == 0) {
            txt.textContent = zikr[0]
        }else if (i == 33) {
            txt.textContent = zikr[1]
        }else if (i == 66) {
            txt.textContent = zikr[2]
        }else if (i == 99) {
            txt.textContent = zikr[3]
        }else if (i == 132) {
            txt.textContent = zikr[4]
        }else if (i == 165) {
            txt.textContent = zikr[5]
        }
        i++;
        num.textContent = i;
    }
    document.querySelector("#clear").addEventListener("click", () => {
        i = 0;
        a=0
        num.textContent = i;
        txt.textContent = zikr[a]
    })
}
function dottedTasbeh() {
    let display = document.querySelector("#numeric");
    let dottedBox = document.querySelector(".dotted");
    for (let i = 1; i <= 10000; i++){
        let spanDot = document.createElement("div");
        spanDot.className = "dot";
        spanDot.innerHTML = i;
        dottedBox.appendChild(spanDot);
        
    }
    const beads = document.querySelectorAll('.dot');

    const refreshBtn = document.getElementById('refreshBtn');
    beads.forEach((bead, index) => {
        bead.addEventListener('click', () => {
            bead.style.order = '99';
            rotateBeads(index);
        });
    });

    refreshBtn.addEventListener('click', () => {
    beads.forEach(bead => {
        bead.style.order = '';
    });
    });

    function rotateBeads(index) {
    for (let i = index + 1; i < beads.length; i++) {
        beads[i].style.order = i - index;
    }
    }



}
function runThemes2() {
    let radios2 = document.querySelectorAll('#secondInputs');
    let tasbeh = document.querySelector(".tasbehDot");   
    let display = document.querySelectorAll('.dot');
    let a = 4;
    let bgClrs = ['#800080', '#dc143c', '#008000', '#000080', '#000035'];
    let txtClrs = ['yellow', 'lime', 'chartreuse', 'orange', 'purple']
    for (let i = 0; i <= a; i++){
        radios2[i].onclick = () => {
            tasbeh.style.background = bgClrs[i];
            tasbeh.style.borderColor = txtClrs[i];
            tasbeh.style.color = txtClrs[i];
        }
    }
 
}
function startAllConfig() {
    dottedTasbeh()
    runThemes2()
    runThemes()
    number()
    choose()
}
startAllConfig()

