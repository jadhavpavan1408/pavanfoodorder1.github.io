function Clickorder(){
    // customer information
    document.getElementById("lblname").innerHTML = document.getElementById("name").value;
    var number = document.getElementById("number").value;
    var name = document.getElementById("name").value;
    if(number == ""){
        document.getElementById("lblnumber").innerHTML = "Enter Mobile Number".fontcolor("red")
    }else{
        document.getElementById("lblnumber").innerHTML = number
    }
    if(name == ""){
        document.getElementById("lblname").innerHTML = "Please Enter Name".fontcolor("red")
    }else{
        document.getElementById("lblname").innerHTML = name;
    }
    //meal 
    mealname = "";
    mealcost = 0;
    count = []
    total = 0;
    var souththali = document.getElementById("optmeal1");
    var biryanimeal = document.getElementById("optmeal2");
    if(souththali.checked == true){
        document.getElementById("lblmeal").innerHTML = souththali.value;
        document.getElementById("lblmealimage").src = "./images/southmeal1.jpg";
        mealcost = 250;
        count += "1"
    }
    if(biryanimeal.checked == true){
        document.getElementById("lblmeal").innerHTML = biryanimeal.value;
        document.getElementById("lblmealimage").src = "./images/biryani2.jpg"
        mealcost = 125;
        count += "1"
    }
    breakfast = "";
    breakfastcost = 0;
    var kolkatabiryani = document.getElementById("kolkatabiryani");
    var burgercombo = document.getElementById("burgercombo");
    var pastry = document.getElementById("pastry");
    var tortassandwich = document.getElementById("tortassandwich");
    var puneriburger = document.getElementById("puneriburger");
    var pizza = document.getElementById("pizza");
    if(kolkatabiryani.checked){
        breakfast += kolkatabiryani.value + "<br />";
        breakfastcost = 170;
        mealcost += breakfastcost;
        count += "1"
    }
    if(burgercombo.checked){
        breakfast += burgercombo.value + "<br />";
        breakfastcost = 60;
        mealcost += breakfastcost;
        count += "1"
    }
    if(pastry.checked){
        breakfast += pastry.value + "<br />";
        breakfastcost = 30;
        mealcost += breakfastcost;
        count += "1"
    }
    if(tortassandwich.checked){
        breakfast += tortassandwich.value + "<br />";
        breakfastcost = 50;
        mealcost += breakfastcost;
        count += "1"
    }
    if(puneriburger.checked){
        breakfast += puneriburger.value + "<br />";
        breakfastcost = 80;
        mealcost += breakfastcost;
        count += "1"
    }
    if(pizza.checked){
        breakfast += pizza.value + "<br />";
        breakfastcost = 120;
        mealcost += breakfastcost;
        count += "1"
    }
    
    total += mealcost;
    document.getElementById("lblbreakfast").innerHTML = breakfast;
    document.getElementById("lblcount").innerHTML = count.length
    document.getElementById("lbltotal").innerHTML = `<b> ${total} &#8377;</b>`;
    
}
