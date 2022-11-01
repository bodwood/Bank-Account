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

Bank.prototype.findAccount = function(id) {
    if (this.accounts[id] !== undefined) {
        return this.accounts[id];
    }
    return false;
};

function Account(firstName, initialDeposit, currentBalance) {
    this.firstName = firstName;
    this.initialDeposit = initialDeposit;
    this.currentBalance = currentBalance;
}

let bankAccount = new Bank();

let person1 = new Account("Bodie", "12324");
let person2 = new Account("Lucas", "23589412358");
bankAccount.addAccount(person1);
bankAccount.addAccount(person2);
console.log(bankAccount.findAccount('2'));




//------------------------------------------------------//