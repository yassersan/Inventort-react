
const mongoose = require('mongoose')

const itemScehma = mongoose.Schema(
    {
        itemName: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        price: {
            type: Number,
            required: true
        },

        image: {
            type: String,
            required: false
        },

        reviews: {
            type: String,
            required: false
        },

        qunatity: {
            type: Number,
            required: false
        }

    },
    {
        timestamps: true
    }
)

const Item = mongoose.model('Item', itemScehma);

module.exports = Item;