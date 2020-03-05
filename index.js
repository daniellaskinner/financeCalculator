//function for grabbing each input return input value
//for salary set default of 25000 if no input or 0 is entered
function getCustomerSalary() {
    let salary = document.getElementById("salary").value
    if(salary == 0 || !salary) {
        let salary = 25000
        return salary
    } else {
        return salary
    }
}

//add error message for borrow amount >8000
function getInputBorrowAmount() {
    let borrowAmount = document.getElementById("borrowAmount").value
    if(borrowAmount == 0 || !borrowAmount) {
        let borrowAmount = 0
        return borrowAmount
    } else {
        return borrowAmount
    }
}

//monthly repayment percentage: default/minimum 10%
function getInputRepaymentPercentage() {
    let repaymentPercentage = document.getElementById("repayment%").value
    if(repaymentPercentage == 0 || !repaymentPercentage) {
        let repaymentPercentage = 10
        return repaymentPercentage
    } else {
        return repaymentPercentage
    }
}


//calculation function
//admin fee is up front amount before borrowed amount or anything then additional 500 pounds depending on how much borrowed
//going to need a + or parseint in front of borrowed amount to treat like number so it doesn't concatenate
function getAdminFee (borrowAmount) {
    return ((borrowAmount/100) * 5)
}

// var borrowAmountPlusAdminFee = getAdminFee(getInputBorrowAmount())

//calculating repayment amount use function calls above to use inputs in calc
function calculateRepaymentAmount (borrowAmount) {
    if (borrowAmountPlusAdminFee > 6400 && borrowAmountPlusAdminFee <= 7200) {
        let repaymentAmount = addAdminFee(borrowAmount) + 500
        return repaymentAmount
    } if (borrowAmountPlusAdminFee > 7200 && borrowAmountPlusAdminFee <= 8000) {
        let repaymentAmount = addAdminFee(borrowAmount) + 500
        return repaymentAmount
    } else {
        return  addAdminFee(borrowAmount)
    }
}

//divide repayment percentage by 100 to get decimal so can x by decimal to get monthly amount to pay back



//add event listener to button to trigger the calculate function
document.querySelector("button").addEventListener("click", ()=> {
    document.getElementById("loan").textContent = getInputBorrowAmount()
    document.getElementById("adminFee").textContent = getAdminFee(getInputBorrowAmount())
    console.log(getCustomerSalary())
    console.log(getInputRepaymentPercentage())
})