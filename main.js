var pizzalist = [];
function submit() {
    var name1 = document.getElementById("pizza1").value
    var name2 = document.getElementById("pizza2").value
    var name3 = document.getElementById("pizza3").value
    var name4 = document.getElementById("pizza4").value

    pizzalist.push(name1);
    pizzalist.push(name2);
    pizzalist.push(name3);
    pizzalist.push(name4);
    
    pizzalist.sort();
    document.getElementById("display_pizza").innerHTML = pizzalist;
    document.getElementById("submit").style.display = "none";
    console.log(pizzalist);

};
