$(document).ready(onReady);
console.log('JS');

function onReady() {
    console.log('JQ');

    $(`#submitButton`).on( `click`, function() {
        addEmployee();
        checkCost();
        
          }

    )};
let workers = [];
let cost = [];
let totalCosts =0;
class Employee {
    constructor (firstName, lastName, idNum, jTitle, annualSalary)  {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNum = idNum;
        this.jTitle = jTitle;
        this.annualSalary = annualSalary;
    }
}

function addEmployee( firstName, lastName, idNum, jTitle, annualSalary) {
    $(`#outputString`).empty();
    firstName = $(`#fNameInput`).val();
    lastName =$(`#lNameInput`).val();
    idNum = $(`#idInput`).val();
    jTitle = $(`#titleInput`).val();
    annualSalary = $(`#salaryInput`).val();
    let newEmployee = new Employee ( firstName, lastName, idNum, jTitle, annualSalary);
    workers.push(newEmployee);
    console.log(workers);

    for (employee of workers) {
        
        let outPut = `<div class="row">`;
        outPut += `<div class="col-2">`;
        outPut += `<p>` + employee.firstName + `</p>`;
        outPut += `</div>`;
        outPut += `<div class="col-2">`;
        outPut += `<p>` + employee.lastName + `</p>`;
        outPut += `</div>`;        
        outPut += `<div class="col-2">`;
        outPut += `<p>` + employee.idNum + `</p>`;
        outPut += `</div>`;
        outPut += `<div class="col-2">`;
        outPut += `<p>` + employee.jTitle + `</p>`;
        outPut += `</div>`;
        outPut += `<div class="col-2">`;
        outPut += `<p>` + employee.annualSalary + `</p>`;
        outPut += `</div>`;
        $(`#outputString`).append(outPut);
        
    }
    $(`#costOutput`).empty();
    newCost = parseInt($(`#salaryInput`).val());
    totalCosts += newCost;
    $(`#costOutput`).append(`Total Monthly Costs: $` + totalCosts);

    firstName = $(`#fNameInput`).val(``);
lastName =$(`#lNameInput`).val(``);
idNum = $(`#idInput`).val(``);
jTitle = $(`#titleInput`).val(``);
annualSalary = $(`#salaryInput`).val(``);
}

function checkCost() {
    if (totalCosts >= 20000) {
    console.log('in checkCost');
    $(`#costOutput`).addClass(`redBackground`);
    }
}
       