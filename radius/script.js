
const PI=3.14159;
let radius;
let circumference;
document.getElementById('submit').onclick=function(){
    radius=document.getElementById('mytext').value;
    radius=Number(radius);
    circumference=2 * PI * radius;
    document.getElementById('myh3').textContent=circumference + 'cm';
    if (isNaN(radius)){
        document.getElementById('myh3').textContent=`Please enter a correct number`
    }

}

