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
//divide repayment percentage by 100 to get %multiplier so can x by salary to get monthly repaymemt amount
function getInputRepaymentPercentage() {
    let repaymentPercentage = document.getElementById("repayment%").value
    if(repaymentPercentage == 0 || !repaymentPercentage) {
        let repaymentPercentage = 10
        return (repaymentPercentage / 100)
    } else {
        return (repaymentPercentage / 100)
    }
}


//calculate admin fee function- take 5 percent of loan amount
function getAdminFee (borrowAmount) {
    return ((borrowAmount/100) * 5)
}

//function to show an error if loan entered is over £8000
function showError() {
    document.getElementById("loanErrorMsg").textContent = "Only loans up to £8,000 are provided."
}

//calculating repayment amount use function calls above to use inputs in calc
function calculateRepaymentAmount (borrowAmount) {
    if(borrowAmount > 6400 && borrowAmount <= 7200) {
        let repaymentAmount = (parseInt(borrowAmount) + 500)
        return repaymentAmount
    } if(borrowAmount > 7200 && borrowAmount <= 8000) {
        let repaymentAmount = (parseInt(borrowAmount) + 500)
        return repaymentAmount
    } if(borrowAmount > 8000) {
        showError()
    }
    else {
        let repaymentAmount = borrowAmount
        return repaymentAmount
    }
}

//add event listener to button to trigger the calculations
//set visibility of results div to visible and fade in gradually
document.querySelector("button").addEventListener("click", ()=> {
    document.getElementById("loan").textContent = getInputBorrowAmount()
    document.getElementById("adminFee").textContent = getAdminFee(getInputBorrowAmount())
    //get monthly repayment amount by doing repayment percentage * monthly salary
    let monthlyRepaymentAmount = (getInputRepaymentPercentage() * (getCustomerSalary()/12))
    document.getElementById("monthlyRepaymentCost").textContent = monthlyRepaymentAmount

})


let totalBorrowAmount = getInputBorrowAmount()
console.log(calculateRepaymentAmount(totalBorrowAmount))

//want how many months to pay back loan. amount in loan / monthly repayment amount
function calculateLoanDuration(totalBorrowAmount, monthlyRepaymentAmount) {

}