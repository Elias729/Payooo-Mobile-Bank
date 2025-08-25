// * Login page functionality
document.getElementById("login-button").addEventListener("click", (e) => {
    e.preventDefault();
    const mobileNumber = "01820627082";
    const pin = "2004";

    const mobileNumberInput = document.getElementById("mobile-number");
    const mobileNumberValue = mobileNumberInput.value;
    mobileNumberInput.value = "";
    const pinInput = document.getElementById("pin");
    const pinValue = pinInput.value;
    pinInput.value = "";
    if (mobileNumberValue === mobileNumber && pinValue === pin) {
        window.location.href = "./home.html";
    } else {
        alert("Invalid mobile number or PIN");
    }
})