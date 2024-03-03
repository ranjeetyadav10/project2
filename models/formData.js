const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
    adhaarNo: {
        type: Number,
    },
    vadhaarNo: {
        type: Number,
    },
    IdentificationCard: {
        type: String,
    },
    IdentificationCard: {
        type: String,
    },
    IdNo: {
        type: String,
    },
    IdNo: {
        type: String
    },
    CandidateName: {
        type: String
    },
    vCandidateName: {
        type: String
    },
    newName: {
        type: String
    },
    againNewName: {
        type: String
    },
    gender: {
        type: String,
    },
    vgender: {
        type: String
    },
    dob: {
        type: Date
    },
    verifydob: {
        type: Date
    },
    fatherName: {
        type: String
    },
    verifyfatherName: {
        type: String
    },
    motherName: { type: String },
    verifyMotherName: { type: String },
    tenth: { type: String },
    againTenth: { type: String },
    rollNo: { type: Number },
    VerifyRollNo: { type: Number },
    passingYear: { type: Number },
    VpassingYear:{type:Number},
    EduQualification:{type:String},
    VeduQualification:{type:String},
    mobileNo:{type:Number},
    email:{type:String}
});

const formData = mongoose.model("formData", formSchema);

module.exports = formData;