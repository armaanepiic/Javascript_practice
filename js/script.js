// nested array

const myObj = {
    name: "Arman",
    age: 26,
    cars: [
        { name: "FORD", Models: ["Fiesta", "Focus", "Mustang"]},
        { name: "BMW", Models: ["320", "X3", "X5"]},
        {name: "FIAT", Models: ["500", "Panda"]}
    ]
}
let x = "";
for (let i in myObj.cars) {
    x += "<h2>" + myObj.cars[i] + "</h2>";
    for (let j in myObj.cars[i].Models) {
        x += myObj.cars[i].Models[j] + "<br>";
    }
}
document.getElementById('demo').innerHTML = x;