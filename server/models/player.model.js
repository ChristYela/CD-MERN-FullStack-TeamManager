const mongoose = require('mongoose');

const EsquemaPlayer = new mongoose.Schema({

    nombre: {
        type: String,
        required: [true, "Name Required."],
        minlength: [2, "Name must be at least 2 characters"]
    },
    posicion: {
        type: String,
        minlength: [3, "Position must be at least 3 characters"]
    },
    estado: {
        type: Array,
        required: [true, "Status required"],
        default: ["undecided","undecided","undecided"]
    }
}, { timestamps: true, versionKey: false });
//timestamps crea campos de createdAt y updatedAt
//versionKey: false elimina el campo _v


const Player = mongoose.model("players", EsquemaPlayer);

module.exports = Player;