//** Phone Plus Event */
document.getElementById('phonePlusBtn').addEventListener('click', function () {
    shortCutClickHandler(true, 'phone')
})

//** Phone Minus Event */
document.getElementById('phoneMinusBtn').addEventListener('click', function () {
    shortCutClickHandler(false, 'phone')
})

//** Case Plus Event */
document.getElementById('CasePlusBtn').addEventListener('click', function () {
    shortCutClickHandler(true, 'case')
})

//** Case Plus Event */
document.getElementById('CaseMinusBtn').addEventListener('click', function () {
    shortCutClickHandler(false, 'case')
})

//** ShortCut Click Event */
function shortCutClickHandler(isPhone, product) {
    const productInput = document.getElementById(product + 'Input')
    const productNumber = parseInt(productInput.value)

    let productCount = productNumber
    if (isPhone == true) {
        productCount = productNumber + 1
    }
    if (isPhone == false && productNumber > 0) {
        productCount = productNumber - 1
    }
    productInput.value = productCount

    let productAmount = productCount
    if (product == 'phone') {
        productAmount = productCount * 1219
    }
    if (product == 'case') {
        productAmount = productCount * 59
    }
    document.getElementById(product + 'Amount').innerText = productAmount
    subTotal()
}


//** Sub Total value */
function subTotal() {
    const productPhoneNumber = shortCutSubTotal('phone')
    const productCaseNumber = shortCutSubTotal('case')

    const totalSub = productPhoneNumber * 1219 + productCaseNumber * 59
    document.getElementById('subTotal').innerText = '$' + totalSub

    //** Vat */
    const vat = Math.round(totalSub * 15 / 100)
    document.getElementById('vat').innerText = '$' + vat

    //** Grand Total */
    const grandTotal = totalSub + vat
    document.getElementById('grandTotal').innerText = grandTotal
}



//** ShortCut Sub Total */
function shortCutSubTotal(product) {
    const productCaseInput = document.getElementById(product + 'Input')
    const productCaseNumber = parseInt(productCaseInput.value)
    return productCaseNumber
}
