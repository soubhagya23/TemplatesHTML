let name1 = prompt("Enter Groom Name: ");
let name2 = prompt("Enter Bride Name: ");




let groom = document.getElementById("groom");
let bride = document.getElementById("bride");


groom.innerHTML = `${name1}`;
bride.innerHTML = `${name2}`;