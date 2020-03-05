//function for grabbing each input return input value
//for salary set default of 25000 if no input or 0 is entered
function getCustomerSalary() {
    var salaryInput = document.getElementById("salary").value
    if(salaryInput == 0 || !salaryInput) {
        var salary = 25000
        //print to the screen 'deafult salary of 25000 assumed'
    } else {
        var salary = salaryInput
    }
    return salary
}

function getInputBorrowAmount() {
    let borrowAmount = document.getElementById("borrowAmount").value
    return borrowAmount
}

//add monthly repayment percentage: default/minimum 10%
function getInputRepaymentPercentage() {
    let repaymentPercentage = document.getElementById("repayment%").value
    return repaymentPercentage
}

//call each input function and store to vars
//might not need these as global vars as could call functions above inside calc function
// let salary = getCustomerSalary()
// let borrowAmount = getInputBorrowAmount()
// let repayment = getInputRepaymentPercentage()


//calculation function
//admin fee is up front amount before borrowed amount or anything then additional 500 pounds depending on how much borrowed
//going to need a + or parseint in front of borrowed amount to treat like number so it doesn't concatenate
function calculateAdminFee (borrowAmount) {
    adminFee
    if (borrowAmount <= 6400) {
        //code
    } if (borrowAmount > 6400 && borrowAmount <= 7200) {
        adminFee = ((borrowAmount/100) * 5) + 500
    } if (borrowAmount > 7200 && borrowAmount <= 8000) {
        adminFee = ((borrowAmount/100) * 5) + 500
    }
    return adminFee
}

var adminFee = calculateAdminFee(borrowAmount)




//divide repayment percentage by 100 to get decimal so can x by decimal to get monthly amount to pay back



//add event listener to button to trigger the calculate function
//first call functions above to show the inputted values on click of the button
document.querySelector("button").addEventListener("click", ()=> {
    console.log(getCustomerSalary())
    console.log(getInputBorrowAmount())
    console.log(getInputRepaymentPercentage())
})



//The calculator should tell you the admin fee required to borrow the money, how long it will take you to pay off
// and the total amount that you will have borrowed.
// Borrow amount between £1 and £8000
// If borrowing above 80% (£6400) then add £500 to repayment amount
// If borrowing above 90% (£7200) then add a further £500 to repayment amount
// Display 5% of total borrowed amount as upfront admin fee