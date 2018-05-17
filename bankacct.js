function BankAccount() {
                    this.deposit = function(damount){};
                    this.withdraw = function (wamount) {};
                    this.balance = 0;
}

var SavingsAccount = new BankAccount(); // savings account inherits bank account

//SavingsAccount.prototype.balance = 500; // minimum balance
SavingsAccount.balance = 500; // minimum balance
/* make a deposit to the savings account */
SavingsAccount.prototype.deposit = function(damount){
                                                        if (damount < 0) {
                                                            return "Invalid deposit amount";
                                                        }
                                                        else {
                                                                balance += damount;
                                                                return balance;
                                                        }
                                                     };

/* make a withdraw to the savings account */
SavingsAccount.prototype.withdraw = function(wamount){
                                                        if (balance < 501) {
                                                            return "Cannot withdraw beyond minimum account amount balance.";
                                                        }

                                                         if (wamount < balance) {
                                                            return "Cannot withdraw beyond current account amount balance.";
                                                        }

                                                        else if (balance < 0) {
                                                            return "Invalid withdraw amount";
                                                        }

                                                        else balance = balance - wamount;
                                                        return balance;
                                                    };   
                                                    
var CurrentAccount = new BankAccount(); // Current account inherits

CurrentAccount.prototype.balance = 0; // minimum balance for current account

/* make a deposit to the savings account */
SavingsAccount.prototype.deposit = function(damount){
                                                        if (damount < 0) {
                                                            return "Invalid deposit amount";
                                                        }
                                                        else {
                                                                balance += damount;                                                       
                                                                return balance;
                                                        }
                                                    };

/* make a withdraw to the current account */
CurrentAccount.prototype.withdraw = function(wamount){
                                                        if (wamount < 0) {
                                                            return "Invalid withdraw amount.";
                                                        }

                                                        else if (wamount > balance) {
                                                            return "Cannot withdraw beyond current account amount balance.";
                                                        }

                                                        else {
                                                                balance = balance - wamount;
                                                                return balance;
                                                            }
                                                    };

/* Object instance of savings */
var sk = new SavingsAccount();
console.log("Initial balance of sk's savings acct is" + sk.balance + "shs");

