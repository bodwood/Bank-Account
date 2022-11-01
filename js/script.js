//Holds instances of constructor
function Bank() {
    this.accounts = {};
    this.currentId = 0;
}

Bank.prototype.addAccount = function (account) {
    account.id = this.assignId();
    this.accounts[account.id] = account;
};

Bank.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
};

Bank.prototype.findAccount = function (id) {
    if (this.accounts[id] !== undefined) {
        return this.accounts[id];
    }
    return false;
};

//Constructor
function Account(firstName, initialDeposit) {
    this.firstName = firstName;
    this.initialDeposit = initialDeposit;
}

let bankAccount = new Bank();

console.log(bankAccount)





//------------------------------------------------------//

function handleBalance(){
    const depositAmount = parseInt(document.getElementById("depositAmount").value);
    const withdrawalAmount = parseInt(document.getElementById("withdrawalAmount").value);
    const currentBalance = parseInt(document.getElementById("initialDeposit").value);
    //const currentBalance1 = parseInt(document.getElementById("currentBalance").placeholder);

    let newBalance = currentBalance;
    let newBalance1 = parseInt(newBalance);
    console.log(currentBalance);
    newBalance1 += depositAmount;
    newBalance1 -= withdrawalAmount;
    document.getElementById("currentBalance").innertext = toString(newBalance1);
    console.log(newBalance1);

}

function handleNewAccount(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const initialDeposit = document.getElementById("initialDeposit").value;
    let newAccount = new Account(name, initialDeposit);
    bankAccount.addAccount(newAccount);

    const firstDeposit = document.getElementById("initialDeposit").value;
    let currentBalance = document.getElementById("currentBalance");
    currentBalance.placeholder = firstDeposit;
    
handleBalance();
}


window.addEventListener("load", function () {
    const form = document.getElementById("form");
    form.addEventListener("submit", handleNewAccount);
});
