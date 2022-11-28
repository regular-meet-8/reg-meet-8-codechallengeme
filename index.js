// promt user to input marks and assign variable
const studentMarks = prompt("Enter your student marks:","marks here..(0 -100)!")
// we now loop through the options using if statements
if(studentMarks > 79){
    console.log(`Grade is: A`)

}else if(studentMarks >= 60){
console.log(`Grade is: B`)

}else if(studentMarks >= 49){
    console.log(`Grade is: C`)

}else if(studentMarks >= 40){
    console.log(`Grdae is: D`)

}else if(studentMarks < 40){
    console.log(`Grade is : E`)

}
// prompt user to input car speed and assign it to a variable
const carSpeed = prompt(`Enter car speed:`, `km/s`)
// work out points calculation and assign it to a variable
const points = (carSpeed - 70) / 5
if(carSpeed < 70){
    console.log(`Ok.`)
    // output points of every speed
    console.log(points)

}//loops upto limit and suspends license
else if(points > 12){
    console.log(`License suspended.`)

}
// create needed variables for calculation
var basicSalaryAnnualy;
var benefits;
var payee;
var deductions;
var netSalary;

//promt for basic salary per year
prompt(`Input your basic salry:`)
prompt(`Input your benefits:`)
prompt(`Input your deductions:`)

// loop through different tax rates
if(basicSalaryAnnualy <= 288000 ){
    return payee = 10%(basicSalaryAnnualy)

}else if(basicSalaryAnnualy <= 388000){
    return payee = 25%(basicSalaryAnnualy)

}else if(basicSalaryAnnualy > 388000){
    return payee = 30%(basicSalaryAnnualy)
}
// give formula to get net salary
netSalary = (basicSalaryAnnualy + benefits) - (deductions + payee)
