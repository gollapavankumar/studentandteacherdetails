let studentDetailsContainerEl = document.getElementById("studentDetailsContainer")

let studentDeatilsEl = document.getElementById("studentDeatils");
let teacherDetailsEl = document.getElementById("teacherDetails");
let feeDetailsEl = document.getElementById("feeDetails");


let nameEl = document.createElement("h1");
let studentId = document.createElement("p")
let dateOfJoin = document.createElement("p")
let teacherName = document.createElement("p")
let feeEl = document.createElement("p")


studentDeatilsEl.onclick = function() {
    studentDetailsContainerEl.classList.add("main-container")
    let studentCardContainerEl = document.getElementById("studentCardContainer");
    studentCardContainerEl.classList.add("card-container")
    nameEl.textContent = "golla pavankumar"
    nameEl.classList.add("name")
    studentCardContainerEl.appendChild(nameEl);

    studentId.textContent = "student id :- 12";
    studentId.classList.add("student-id")
    studentCardContainerEl.appendChild(studentId)

    dateOfJoin.textContent = " date of join :- 10-3-2023";
    dateOfJoin.classList.add("age")
    studentCardContainerEl.appendChild(dateOfJoin)

    teacherName.textContent = "Teacher Name :- Rahul sir"
    teacherName.classList.add("from");
    studentCardContainerEl.appendChild(teacherName);

    feeEl.textContent = "balance fee : - 25000"
    feeEl.classList.add("fee");
    studentCardContainerEl.appendChild(feeEl)

}



teacherDetailsEl.onclick = function() {
    studentDetailsContainerEl.classList.add("main-container")
    let studentCardContainerEl = document.getElementById("studentCardContainer");
    studentCardContainerEl.classList.add("card-container")
    nameEl.textContent = "Rahul sir"
    nameEl.classList.add("name")
    studentCardContainerEl.appendChild(nameEl);

    studentId.textContent = "subject:- python";
    studentId.classList.add("student-id")
    studentCardContainerEl.appendChild(studentId)

    dateOfJoin.textContent = " date of join :- 10-3-2021";
    dateOfJoin.classList.add("age")
    studentCardContainerEl.appendChild(dateOfJoin)

    teacherName.textContent = "Teacher Name :- Rahul sir"
    teacherName.classList.add("from");
    studentCardContainerEl.appendChild(teacherName);

    feeEl.textContent = "fee : - 50000"
    feeEl.classList.add("fee");
    studentCardContainerEl.appendChild(feeEl)

}
feeDetailsEl.onclick = function() {
    studentDetailsContainerEl.classList.add("main-container")
    let studentCardContainerEl = document.getElementById("studentCardContainer");
    studentCardContainerEl.classList.add("card-container")
    nameEl.textContent = "Fee details"
    nameEl.classList.add("name")
    studentCardContainerEl.appendChild(nameEl);

    studentId.textContent = "full stock coures amount:- 25000";
    studentId.classList.add("student-id")
    studentCardContainerEl.appendChild(studentId)


    teacherName.textContent = "java coures amount:- 10000"
    teacherName.classList.add("from");
    studentCardContainerEl.appendChild(teacherName);

    feeEl.textContent = "totalfee deatails :- 50000"
    feeEl.classList.add("fee");
    studentCardContainerEl.appendChild(feeEl)

}
