let s = "zabeer"

let obj = {
    name:"zabeer", age:28, profession:"coder"
}


for(let property of Object.keys(obj)){
    console.log(property,obj[property] );
}
