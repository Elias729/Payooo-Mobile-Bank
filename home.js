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
        } 
        else {
            alert("Invalid input. Please check your details and try again.");
        }
    })