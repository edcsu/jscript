
class Person {
                constructor(fn, ln,ag,gen)
                {
                    this.firstname = fn;
                    this.lastname = ln;
                    this.age = ag;
                    this.gender = gen;
                }

                getFullname()
                {
                    return ("Yo full names are: " + this.firstname + " " + this.lastname);
                }

                getage()
                {
                    return (" and you are " + this.age + " old.");
                }

                getgender()
                {
                    return (" You are " + this.gender);
                }
            
             }

             class Male extends Person
              {
                constructor(fn, ln,ag, gen = "male"){
                    super(fn, ln, ag, gen);
                }
                }

                class Female extends Person
                {
                  constructor(fn, ln,ag, gen = "female"){
                      super(fn, ln, ag, gen);
                  }
                }


var hj = new Person ("Sewa", "Keith", 25, "male");
console.log(  hj.getFullname() + hj.getage() + hj.getgender());

var sj = new Female ("Meghan", "Markle", 32);
console.log(  sj.getFullname() + sj.getage() + sj.getgender());

var vj = new Male ("Sewa", "Keith", 25);
console.log(  vj.getFullname() + vj.getage() + vj
.getgender());