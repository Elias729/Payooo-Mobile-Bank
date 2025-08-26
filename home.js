document.getElementById("add-money-button")
    .addEventListener("click", (e) => {
        e.preventDefault();
        const validPin = 2004;
        const bankSelectInput = document.getElementById("bank-select");
        const bankSelect = bankSelectInput.value;

        const bankAccountNumber = document.getElementById("bank-account-number");
        const bankAccountNumberValue = bankAccountNumber.value;

        const amountToAdd = document.getElementById("amount-to-add");
        const amountToAddValue = parseInt(amountToAdd.value);

        const pinNumber = document.getElementById("pin-number");
        const pinNumberValue = parseInt(pinNumber.value);

        const balance = parseInt(document.getElementById("balance").innerText);

        if (bankAccountNumberValue.length === 11 && pinNumberValue === validPin && bankSelect !== "Select Bank") {
            const newBalance = balance + amountToAddValue;
            document.getElementById("balance").innerText = newBalance;

            bankSelectInput.value = "Select Bank";
            bankAccountNumber.value = "";
            amountToAdd.value = "";
            pinNumber.value = "";
        } else {
            alert("Invalid input. Please check your details and try again.");
        }
    });


// * CashOut section

document.getElementById("withdraw-button")
    .addEventListener("click", (e) => {
        e.preventDefault();
        const validPin = 2004;

        const agentNumber = document.getElementById("agent-number");
        const agentNumberValue = agentNumber.value;

        const amountWithdraw = document.getElementById("amount-withdraw");
        const amountWithdrawValue = parseInt(amountWithdraw.value);

        const pinNumber = document.getElementById("pin-num");
        const pinNumberValue = parseInt(pinNumber.value);

        const balance = parseInt(document.getElementById("balance").innerText);

        if (agentNumberValue.length === 11 && pinNumberValue === validPin && amountWithdrawValue <= balance) {
            const newBalance = balance - amountWithdrawValue;
            document.getElementById("balance").innerText = newBalance;

            agentNumber.value = "";
            amountWithdraw.value = "";
            pinNumber.value = "";
        } else {
            alert("Invalid input. Please check your details and try again.");
        }
    })





// ! Toggling Forms

document.getElementById("add-money").addEventListener("click", () => {
    document.getElementById("Cashout-form").style.display = "none";
    document.getElementById("add-money-form").style.display = "block";
})
document.getElementById("cashout-button").addEventListener("click", () => {
    document.getElementById("add-money-form").style.display = "none";
    document.getElementById("Cashout-form").style.display = "block";
})