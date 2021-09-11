"script";
let userName = prompt("Lütfen adınızı giriniz:");
document.getElementById("myName").innerHTML = userName;




let date = new Date();  
let options = {  
    weekday: "long", year: "numeric", month: "short",  
    day: "numeric", hour: "2-digit", minute: "2-digit", second:"2-digit"  
};  

document.getElementById("myClock").innerHTML= date.toLocaleTimeString("tr-TR", options); 