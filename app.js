
const gotoPinPage = () => {
    window.history.href = "pin.html";
}

// -----Global Variables-----
let moneyBox = 258000;
let cardDailyLimit = 28000;
let accountBalance = 482000;

const checkPin = () => {

    // userPin = 786111
    let userPin = document.querySelector('#userPin').value;
    console.log("Pin is ", userPin);

    if (userPin.length < 6) {
        document.querySelector("#errMessage").innerHTML = `you must enter 6 digit pin number`;
        // return;
    }
    else if (userPin.length > 6) {
        document.querySelector("#errMessage").innerHTML = `you must enter 6 digit pin number`;
        // return;
    }
    else if (userPin === "786111") {
        document.querySelector("#errMessage").innerHTML = `Correct pin number ✅`;

        document.getElementById("homeScreen").innerHTML = `
        <form onsubmit="withdraw(); return false">
        <label for="withdrawAmount">Enter your amount to withdraw:</label><br>
        <input type="number" id="withdrawAmount" required>
        <button>WithDraw</button>
        </form>
        `
        // return;
    }
    else if (userPin !== "786111") {
        document.querySelector("#errMessage").innerHTML = `Incorrect pin number ❌`;
        // return;
    }

}


const withdraw = () => {

    console.log("Withdraw funtion running...");

    let withdrawAmount = +document.querySelector("#withdrawAmount").value;
    // console.log("withdraw amount is ", withdrawAmount);

    if (withdrawAmount > moneyBox) {
        document.querySelector("#errMessage2").innerHTML = `This machine don't have enough money, please try smaller amount`
        return;
    }
    else if (withdrawAmount > cardDailyLimit) {
        document.querySelector("#errMessage2").innerHTML = `Daily card limit is Rs.50000, please enter under Daily card limit amount.`
        return;
    }
    else if (withdrawAmount > accountBalance) {
        document.querySelector("#errMessage2").innerHTML = `Your account balance ${accountBalance} is less than your withdrawal amount.`
        return;
    }
    else if (withdrawAmount < 800) {
        document.querySelector("#errMessage2").innerHTML = `Please enter more than 500rs.`
        return;
    }
    else if (withdrawAmount % 500) {
        document.querySelector("#errMessage2").innerHTML = `Please Enter 500 multiply means 500, 1000, 1500, 2000 etc`
        return;
    }
    else {

        document.querySelector("#errMessage2").innerHTML = `Withdraw has been Done successfully 🎉`
        
        moneyBox = moneyBox - withdrawAmount;
        cardDailyLimit = cardDailyLimit - withdrawAmount;
        accountBalance = accountBalance - withdrawAmount;

        console.log(moneyBox, cardDailyLimit, accountBalance);
        
        document.getElementById("moneyBox").innerHTML = moneyBox;
        document.getElementById("cardDailyLimit").innerHTML = cardDailyLimit;
        document.getElementById("accountBalance").innerHTML = accountBalance;
        return;
    }


}

document.getElementById("moneyBox").innerHTML = moneyBox;
document.getElementById("cardDailyLimit").innerHTML = cardDailyLimit;
document.getElementById("accountBalance").innerHTML = accountBalance;