// Write your solution in this file!
const employee ={
    name: " Agnes Munee",
    streetAddress: '00100',
}
// console.log(employee)

const updateEmployeeWithKeyAndValue = function(obj,key,value){
    let newEmployee = {...obj};
    newEmployee[key]=value;
    return newEmployee
}
console.log(updateEmployeeWithKeyAndValue(employee,"city","Nairobi"));


function destructivelyUpdateEmployeeWithKeyAndValue (obj,key,value){
    obj[key]=value;
    return obj
}

const newEmployees=destructivelyUpdateEmployeeWithKeyAndValue(employee,"age",29);
console.log(newEmployees)
console.log(employee)

const deleteFromEmployeeByKey = function(obj,key,value){
    let newE = {...obj};
    delete newE[key]
    return newE
}

function destructivelyDeleteFromEmployeeByKey(obj,key,value){
    delete obj[key]
    return obj
}

