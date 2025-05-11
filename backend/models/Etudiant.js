const mongoose = require("mongoose");

const EtudiantSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }  // Should be hashed for security!
});

module.exports = mongoose.model("Etudiant", EtudiantSchema);
