const message = () => {
    const header = "<div style='text-align: center;'><h1>Personal Information</h1></div>";
    const name = "Vichers Yoel Rory";
    const age = "19";
    const status = "Mahasiswa";
    const major = "Informatics";
    const faculty = "Computer Science";
    const address = "Koka Village";
    const interest = "Web Design, Cyber Security, Programming";
    return header + '<hr> <strong>Name : </strong>' + name + '<br> <strong>Age: </strong>' + age + '<br> <strong>Status : </strong>' + status + '<br> <strong>Major : </strong>' + major + '<br> <strong>Faculty : </strong>' + faculty + '<br> <strong>Address : </strong>' + address + '<br> <strong>Interest : </strong>'  + interest;
};

export default message;