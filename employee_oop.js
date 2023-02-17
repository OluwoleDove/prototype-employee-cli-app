 class Employee{
    constructor(name, role, company, dept){
        this.name = name;
        this.role = role;
        this.company = company;
        this.dept = dept;
        this.hours = hours;
    }
    get salary(){
        return this.hours * 500
    }
    set salary(x){
        this.hours=x
    }
    showEmployee(){
        return this.name + " is a " + this.role+ " at " + this.company 
    }
}

class Manager extends Employee{
    constructor( name, role, company, dept, region ){
        super( name, role, company, dept );
        this.region= region;
    }
    showManager(){
        return this.name+ " Is in-charge of " +this.region +" Region "
    }
}

let myEmployee = new Employee("David", "Developer", "E-Quest", "Project")
let anotherEmployee = new Employee("Winner", "Web designer", "E-Quest", "lmao")
let myManager = new Manager("OJ", " ", " ", " ", "South-West")
console.log(myEmployee.showEmployee)
console.table(anotherEmployee.showEmployee())
console.log(myManager.showManager())

const it_class= [
    {"name": "Amblessed", "Specialty": "Augumented Reality"},
    {"name": "Winner", "Specialty": "Data Analysis"},
    {"name": "OJ", "Specialty": "Machine Learning"},
    {"name": "David", "Specialty": "Virtual Reality"}
    
    ]
console.table(it_class);
