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

function handelToggling(id) {
    const forms = document.getElementsByClassName("forms")
    for (const form of forms) {
        form.style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}

function handelBtn(id) {
    const formBtns = document.getElementsByClassName("form-btn");

    for (const btn of formBtns) {
        btn.classList.remove('border-blue-500', 'bg-blue-100', 'text-blue-500');
        btn.classList.add('text-gray-500');
    }

    const addMoneyBtn = document.getElementById(id);
    addMoneyBtn.classList.remove('text-gray-500');
    addMoneyBtn.classList.add('border-blue-500', 'bg-blue-100', 'text-blue-500');
}

document.getElementById("add-money").addEventListener("click", () => {
    handelToggling("add-money-form");
    handelBtn("add-money");
})
document.getElementById("cashout-button").addEventListener("click", () => {
    handelToggling("Cashout-form");
    handelBtn("cashout-button");
})
document.getElementById("pay-now-button").addEventListener("click", () => {
    handelToggling("transfer-form");
    handelBtn("pay-now-button");
})
document.getElementById("get-bonus-button").addEventListener("click", () => {
    handelToggling("get-bonus-form");
    handelBtn("get-bonus-button");
})
document.getElementById("bill-button").addEventListener("click", () => {
    handelToggling("pay-bill-form");
    handelBtn("bill-button");
})