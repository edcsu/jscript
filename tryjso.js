var person = {
                firstname: "Sewa",
                lastname: "Keith",
                age:        24,
                fullname: function(){ return this.firstname + " " + this.lastname;}
                
             };

             console.log(person.age);
             console.log(fullname());