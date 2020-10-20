(function (){
    "use strict";
    const db = firebase.firestore();

    $(document).ready(function() {
        $('.tooltip').tooltipster({
            animation: 'grow',
            side: 'right',
            theme: 'tooltipster-light'
        }); 
    });

    //#region Functions
    window.onload = LoadSettings();

    function LoadSettings() {
        GetStudents();
    }

    function GetStudents() {
        db.collection('STUDENT')
        .orderBy("student_id", "desc")
        .get()
        .then((snapshot) => {
            let list;
            document.getElementById("student-list").innerHTML = "";
            snapshot.docs.forEach(doc => {
                list = doc.data();
                document.getElementById("student-list").innerHTML += 
                `<li class="student-list-item">
                    <div class="btnRemoveStudent" id="${doc.id}" onclick="RemoveStudent(${doc.id})">
                        <i class="fas fa-user-minus"></i>
                    </div>
                    <div class="student-name">
                        ${list.student_name}
                    </div>
                </li>`;
            });
        });
    }

    function AddStudent(studentName) {
        db.collection('STUDENT')
        .get()
        .then((snapshot) => {
            let studentIDs = [];
            let newStudentID = null;
            snapshot.docs.forEach(doc => {
                let studentData = doc.data();
                studentIDs.push(studentData.student_id);
            });
            newStudentID = Math.max.apply(Math, studentIDs);
            newStudentID++;

            db.collection("STUDENT").add({
                student_id: newStudentID,
                student_name: studentName
			})
            GetStudents();
        });
    }
    
    //#endregion

    //#region Eventlisteners
    document.getElementById("btnAddStudent").addEventListener("click", function(){
        let studentName = document.getElementById("addStudent-input").value;
        AddStudent(studentName);
    });

    // #endregion
})();