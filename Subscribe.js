const submit = document.getElementById("submit");
const result = document.getElementById("result");

function submitValue (e) {
    e.preventDefault();

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let Gender;
        
        if(!male.checked && !female.checked) {
            return alert("Select Gender")
        }
        else if (male.checked == true) {
            Gender = document.getElementById("male").value;
        } 
        else {
            Gender = document.getElementById("female").value;
        } 
             

    result.innerHTML = `
        <div>
            My Name : ${fname} ${lname}
        </div><br>
        <div>
            Gender : ${Gender}
        </div><br>
    `
}

submit.addEventListener("click" , submitValue);