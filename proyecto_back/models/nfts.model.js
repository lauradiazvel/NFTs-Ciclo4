const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const NftsSchema = new Schema({
    token_id:{type: String, required:true, max:60},
    nombre:{type: String, required:true, max:60},
    edicion:{type: String, required:true, max:40},
    autor:{type: String, required:true, max:40},
    coleccion:{type: String, required:true, max:40},
    tipo:{type: String, required: true, max:15},
    publicado:{type: String, required: true, max:70}
});

module.exports = mongoose.model("nfts",NftsSchema);