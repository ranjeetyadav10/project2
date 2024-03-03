const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const formData = require("./models/formData.js")

// Mongodb Connection 
main().then((res) => { console.log("Database Connected ") })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/sscWebsite");
}

// inserting new data for only testing 

let data1 = new formData({
    adhaarNo: 235689,
});

// data1.save().then(res=>console.log(res)).catch(err => console.log(err));

// for connecting ejs files 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));
// for connecting style page
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.use(express.urlencoded({ extended: true }));

app.get("/home", (req, res) => {
    res.render("home.ejs");
})



app.get("/form", (req, res) => {
    res.render("formPage01.ejs");
})

app.post("/form", (req, res) => {
        let { adhaarNo,
            vadhaarNo,
            IdentificationCard,
            IdNo,
            CandidateName,
            vCandidateName,
            changedName,
            newName,
            againNewName,
            gender,
            vgender,
            dob,
            verifydob,
            fatherName,
            verifyfatherName,
            motherName,
            verifyMotherName,
            tenth,
            againTenth,
            rollNo,
            VerifyRollNo,
            passingYear,
            VpassingYear,
            EduQualification,
            VeduQualification,
            mobileNo,
            email } = req.body;

    let newData = new formData({
        adhaarNo: adhaarNo,
        vadhaarNo: vadhaarNo,
        IdentificationCard: IdentificationCard,
        IdNo: IdNo,
        CandidateName: CandidateName,
        vCandidateName: vCandidateName,
        changedName: changedName,
        newName: newName,
        againNewName: againNewName,
        gender: gender,
        vgender: vgender,
        dob: dob,
        verifydob: verifydob,
        fatherName: fatherName,
        verifyfatherName: verifyfatherName,
        motherName: motherName,
        verifyMotherName: verifyMotherName,
        tenth: tenth,
        againTenth: againTenth,
        rollNo: rollNo,
        VerifyRollNo: VerifyRollNo,
        passingYear: passingYear,
        VpassingYear: VpassingYear,
        EduQualification: EduQualification,
        VeduQualification: VeduQualification,
        mobileNo: mobileNo,
        email: email
    });
    newData.save().then(()=>{console.log("Chat saved")})
    .catch(err=> console.log(err));
    res.redirect("/form");
})

app.listen(8000, (req, res) => {
    console.log("Helloow guys its Me...");
});