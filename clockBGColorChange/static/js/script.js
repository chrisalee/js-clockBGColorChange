var d, h, m, s, clock, color;

function clockTime(){
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();


    if (h <= 9) {
        h = '0'+ h;
    }
    if (m <= 9) {
        m = '0'+ m;
    }
    if (s <= 9) {
        s = '0'+ s;
    }     

clock = h + ':' + m + ':' + s;
color = '#' + h + m + s;


document.getElementById('clock').innerHTML = clock;
document.body.style.background = color;

setTimeout(clockTime, 1000);

};

clockTime();