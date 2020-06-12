// TODO: Write code to define and export the Employee class
// The Letter Class is responsible for displaying either an underscore or the underlying character for each letter in the word
class Employee {
    constructor(name,id, email) {
        this.name=name;
        this.id=id;
        this.email=email;

    }
      getName() {
    
      return this.name;
    }

    getRole(){
        return "Employee"
    }
    getEmail(){
        return this.email;
    }
    getId(){
        return this.id;
    }
   
  
   
  }
  
  module.exports = Employee;