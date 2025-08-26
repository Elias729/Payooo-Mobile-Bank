const transactionData = [];

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

        const data = {
            name: "Add Money",
            data: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        }
        transactionData.push(data);

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

        const data = {
            name: "Cash Out",
            data: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        }
        transactionData.push(data);
    })


document.getElementById("transaction-button").addEventListener("click", (e) => {
    e.preventDefault();
    const transactionHistoryList = document.getElementById("transaction-history-list");
     transactionHistoryList.innerHTML = "";
    for (const data of transactionData) {
        const div = document.createElement("div");
        div.innerHTML = `
                    <div class="bg-white p-5 rounded-lg shadow-md mt-5 flex justify-between items-center">
                <div class="flex items-center gap-4 border-b border-gray-300 pb-3 mb-3">
                    <div class="border-2 p-3 rounded-full  bg-gray-100">
                        <img src="./assets/wallet1.png" alt="wallet1" class="mx-auto">
                    </div>
                    <div>
                        <h1 class="mt-2 font-bold text-black">${data.name}</h1>
                        <p class="text-gray-500">${data.data} ${data.time}</p>
                    </div>
                </div>
                <i class="ri-more-2-fill"></i>
            </div>
                `
        transactionHistoryList.appendChild(div);
    }
});



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
document.getElementById("transaction-button").addEventListener("click", () => {
    handelToggling("transaction-history-form");
    handelBtn("transaction-button");
})