
const progress = document.getElementById("progress");
let  value = 0;
const percentage= document.getElementById("percentage")
const interval = setInterval(()=> {
    value++; 
    progress.value = value; 
    percentage.innerHTML = value + "%"; 
    if (value >= 100) {
    clearInterval(interval); 
    }
}, 1000);