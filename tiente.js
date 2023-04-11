function changeMoney(){
    let amount = parseFloat(document.getElementById('amount').value);
    let from = document.getElementById('From').value;
    let to = document.getElementById('To').value;
    let result;
    if (from == "VND" && to == "USD"){
        result = "Result: " + amount / 23000 + "$";
    }
    else if (from == "USD" && to == "VND"){
        result = "Result: " + amount * 23000 + "D";
    }
    document.getElementById('result').innerHTML = result;
}