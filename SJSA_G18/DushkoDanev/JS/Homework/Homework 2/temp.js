const temp = [12, 15, 14, 20, 22, 30]
temp.sort(function(a, b){return a - b});
let sum = 0;


for(let i = 0; i < temp.length; i++) {
    sum += temp[i]
}

if (!temp.length) console.log(0)
else console.log("Prosechna temperatura e:", sum / temp.length, "stepeni")

console.log("Temp vo najladniot den e:", temp[0], "stepeni;", "Temp vo najtopliot den e:", temp[5], "stepeni")
