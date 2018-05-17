class BankAccount {
                    deposit()
                    {

                    }

                    withdraw()
                    {

                    }
                  }

class SavingsAccount extends BankAccount {
                                            constructor(minbalance = 500)
                                            {
                                                super();
                                                this.balance = minbalance;
                                            }

                                            deposit(amount)
                                            {
                                                if (amount < 0) {
                                                    return "Invalid deposit amount";
                                                }
                                                else {
                                                        this.balance += amount;
                                                        return "Your savings balance is " + this.balance;
                                                }
                                            }

                                            withdraw(amount){
                                                if (this.amount > this.balance ) {
                                                    return "Cannot withdraw beyond current account amount balance.";
                                                }
                                                else if ( this.balance < 0) {
                                                    return "Invalid withdraw amount.";
                                                }

                                                else  {
                                                        this.balance -= amount;
                                                        if(this.balance < 501){
                                                            this.balance += amount;
                                                            return "Cannot withdraw beyond minimum account amount balance.";
                                                        }
                                                        else {
                                                            return "Your savings balance is " + this.balance;
                                                        }
                                                }
                                            }
                                         }

class CurrentAccount extends BankAccount {
                                            constructor(minbalance = 0)
                                            {
                                                super();
                                                this.balance = minbalance;
                                            }

                                            deposit(amount)
                                            {
                                                if (amount < 0) {
                                                    return "Invalid deposit amount.";
                                                }
                                                this.balance += amount;
                                                return "Your current acct balance is " + this.balance;
                                            }

                                            withdraw(amount)
                                            {
                                                if (amount < 0) {
                                                    return "Invalid withdraw amount.";
                                                }
                                                else if (amount > this.balance)
                                                {
                                                    return "Cannot withdraw beyond the current account balance.";
                                                }

                                                else this.balance -= amount;
                                                return "Your new current acct balance is " + this.balance;
                                            }
}

var sacct = new SavingsAccount();   // new object of savings acct class
console.log("Your initial savings acct balance is " + sacct.balance); // initial balance
var fd = sacct.deposit(20000);  // deposit to savings acct
console.log("Your new savings acct balance is " + sacct.balance); 
console.log(sacct.deposit(-200));   // negative deposit
console.log(sacct.withdraw(30000)); // withdraw beyond current balance
console.log(sacct.withdraw(1000)); // withdraw below current balance

console.log("*************************");

var cacct = new CurrentAccount();   // new object of current acct class
console.log("Your initial current acct balance is " + cacct.balance); // initial balance
var cd = cacct.deposit(50000);  // a deposit
console.log("Your new current acct balance is " + cacct.balance); // new balance
console.log(cacct.deposit(-5000000));   // negative deposit
console.log(cacct.withdraw(-1));    // negative withdraw
console.log(cacct.withdraw(100000));    // overdraft
console.log(cacct.withdraw(5000));  // verified withdraw
console.log(cacct.withdraw(5000));  // verified withdraw
console.log(cacct.withdraw(5000));  // verified withdraw
console.log(cacct.withdraw(5000));  // verified withdraw