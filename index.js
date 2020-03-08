
//add event listener to button to trigger the calculations only if loan amount is not over 8000
// document.getElementById("result").classList.add('resultShow')

document.querySelector("button").addEventListener("click", ()=> {
    //WHY CAN THESE NOT BE DECLARED GLOBALLY?
    let adminFee = getAdminFee(getInputBorrowAmount())
    let borrowAmount = getInputBorrowAmount()
    let totalLoanCost = calculateRepaymentAmount(borrowAmount)
    let monthlyRepaymentAmount = calculateMonthlyRepaymentAmount(getInputMonthlyRepaymentPercentage(), getCustomerSalary())
    let loanDuration = calculateLoanDuration(totalLoanCost, monthlyRepaymentAmount)

    if(borrowAmount <= 8000 && borrowAmount > 0){
        document.getElementById("adminFee").textContent = adminFee
        document.getElementById("loan").textContent = totalLoanCost
        document.getElementById("monthlyRepaymentCost").textContent = monthlyRepaymentAmount
        document.getElementById("loanDuration").textContent = loanDuration
    } else {
        document.getElementById("result").innerHTML = "Cannot calculate loan. You may only borrow between £0.01-£8000"
    }
})

//VALIDATE FOR NEGATIVE SALARY AND NEGATIVE REPAYMENT PERCENTAGE