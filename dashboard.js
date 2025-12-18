
const data = {
    freshman1: [
        "Introduction To Computer Science",
        "Calculus I",
        "Physics I",
        "English Composition I"
    ],

    freshman2: [
        "Python",
        "Calculus II",
        "Physics II",
        "English Composition II"
    ],

    sophomore1: [
        "C++",
        "Calculus III",
        "EC",
        "Linear Algebra"
    ],

    sophomore2: ["Specializations"],
    junior1: ["Specializations"],
    junior2: ["Specializations"],
    senior1: ["Specializations"],
    senior2: ["Specializations"],
};


const specializations = {
    computer: [
        "Web Dev I",
        "Database",
        "Algorithm",
        "Differential Equation"
    ],

    mechanics: [
        "Technical Drawing",
        "Thermo Dynamics",
        "Engineering Statics",
        "Differential Equation"
    ],

    electronics: [
        "Electro Magnetism",
        "Digital Logic Design",
        "Signal and System",
        "Differential Equation"
    ]
};


let selectedSemester = "";


function showSemester(sem) {
    selectedSemester = sem; 

    const title = document.getElementById("title");
    const result = document.getElementById("result");

    const semesterNames = {
    freshman1: "Freshman I",
    freshman2: "Freshman II",
    sophomore1: "Sophomore I",
    sophomore2: "Sophomore II",
    junior1: "Junior I",
    junior2: "Junior II",
    senior1: "Senior I",
    senior2: "Senior II",
};

title.textContent = semesterNames[sem];

    result.innerHTML = "";

    if (data[sem][0] === "Specializations") {
        showSpecializations();
        return;
    }

    data[sem].forEach(course => {
        result.innerHTML += `
            <div class="item-box" onclick="openCourse('${course}')">
                ${course}
            </div>
        `;
    });
}


function showSpecializations() {
    const result = document.getElementById("result");
    const title = document.getElementById("title");

    title.textContent = "Choose a Specialization";

    result.innerHTML = `
        <div class="item-box" onclick="showSpecCourses('computer')">Computer Science</div>
        <div class="item-box" onclick="showSpecCourses('mechanics')">Mechanics</div>
        <div class="item-box" onclick="showSpecCourses('electronics')">Electronics</div>
    `;
}


function showSpecCourses(spec) {
    const result = document.getElementById("result");
    const title = document.getElementById("title");

    title.textContent = spec.toUpperCase() + " COURSES";
    result.innerHTML = "";

    specializations[spec].forEach(course => {
        result.innerHTML += `
            <div class="item-box" onclick="openCourse('${course}')">
                ${course}
            </div>
        `;
    });
}

function openCourse(courseName) {
    localStorage.setItem("selectedCourse", courseName);
    localStorage.setItem("selectedClass", selectedSemester);

    window.location.href = "course.html";
}
