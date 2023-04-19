"use strict";

const patientIdNumber = document.getElementById('patientIdNumber');
const firstName = document.getElementById('firstName');
const middleInitials = document.getElementById('middleInitials');
const lastName = document.getElementById('lastName');
const dateOfBirth = document.getElementById('dateOfBirth');
const ddlDepartment = document.getElementById('ddlDepartment');
const radioBtn = document.getElementsByName('radioIsOutPatient');
const chkElderlyPatients = document.getElementById('chkElderlyPatients');
const chkShowOutPatients = document.getElementById('chkShowOutPatients');

var table = document.getElementsByTagName('table')[0];
let btn = document.getElementById('btnRegisterPatient');

btn.addEventListener('click', () => {
    var idNumber = patientIdNumber.value;
    var fName = firstName.value;
    var middle = middleInitials.value;
    var lName = lastName.value;
    var dob = dateOfBirth.value;
    var deprt = ddlDepartment.value;
    var checkBtn;
    var showOutPatientsCheckBox = chkShowOutPatients.value;

    for (const rbtn of radioBtn) {
        if (rbtn.checked) {
            checkBtn = rbtn.value;
            break;
        }
    }

    let template = `<tr>
                            <td>${idNumber}</td>
                            <td>${fName}</td>
                            <td>${middle}</td>
                            <td>${lName}</td>
                            <td>${dob}</td>
                            <td>${deprt}</td>
                            <td>${checkBtn}</td>
                        </tr>`;
    table.innerHTML += template;
});

function displayElderlyPatients(){
    
    let rows = table.rows;
    for(let i=0; i<rows.length; i++){
        let col = rows[i].cells;

        for(let j=0; j<col.length; j++){
            let dateOfB = col[4].innerText;
            var age = calculateAge(dateOfB);
        }
        console.log("Age: " + age + " years");

        if(chkElderlyPatients.checked && parseInt(age)<65){
            rows[i].classList.add("d-none-age");
        }else if(!chkElderlyPatients.checked){
            rows[i].classList.remove("d-none-age");
        }
    }
}

function showOutPatient(){

    let rows = table.rows;
    for(let i=0; i<rows.length; i++){
        let col = rows[i].cells;

        for(let j=0; j<col.length; j++){
            var outPatient = col[6].innerText;
        }
        console.log("Patient is out: " + outPatient);

        if(chkShowOutPatients.checked && outPatient == 'Yes'){
            rows[i].classList.add("d-none");
        }else if (!chkShowOutPatients.checked){
            rows[i].classList.remove("d-none");
        }
    }
}

function calculateAge(dateOfBirth){
    var date1 = new Date(dateOfBirth);
    console.log("date1: " + date1);

    //calculate month difference from current date in time
    var month_diff = Date.now() - date1.getTime();
    //convert the calculated difference in date format
    var age_dt = new Date(month_diff);
    //extract year from date    
    var year = age_dt.getUTCFullYear();
    //now calculate the age of the user
    var age = Math.abs(year - 1970);
    
    return age;
}
