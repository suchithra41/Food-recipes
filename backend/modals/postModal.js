import mongoose from 'mongoose';

const CommentsSchema = {
    name : String,
    comment : String
}

const RecipeSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : true
    },
    ingredients : {
        type : String,
        required : true
    },
    procedure : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        required : true,
        default : Date.now()
    },
    cookTime : {
        type : String,
        required : true
    },
    servings : {
        type : Number,
        required : true
    },
    comments : [CommentsSchema]


})

const Recipe = mongoose.model('Recipe' , RecipeSchema);

export default Recipe;