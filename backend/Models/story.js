
const mongoose = require("mongoose")
const Comment = require("./comment")
const slugify = require("slugify")

const StorySchema = new mongoose.Schema({

    author: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    slug: String,
    //ID
    title: {
        type: String,
        required: [true, "Please provide a tracking ID"],
        unique: [true, "Tracking ID alreadyn exist, try another"],
        minlength: [10, "Tracking I must be 10 characters long"],
        maxlength: [10, "Tracking I must be 10 characters long"],

    },
    //Name
    content: {
        type: String,
        required: [true, "Please a provide the Client's Name "],
    },

    address: {
        type: String,
        required: [true, "Please a provide the Client's Address "],
    },
    status: {
        type: String,
        required: [true, "Please a provide the package's Status"],
    },
    time: {
        type: String,
        required: [true, "Please a provide the time left to delivery"],
    },
    image: {
        type: String,
        default: "default.jpg"
    },
    readtime: {
        type: Number,
        default: 3
    },
    likes: [{
        type: mongoose.Schema.ObjectId,
        ref: "User"
    }],
    likeCount: {
        type: Number,
        default: 0
    },
    comments: [{
            type: mongoose.Schema.ObjectId,
            ref: "Comment"
    }],
    commentCount: {
        type: Number,
        default: 0
    }


}, { timestamps: true })

StorySchema.pre("save",  function (next) {

    if (!this.isModified("title")) {
        next();
    }


    this.slug = this.makeSlug()

    next()

})

StorySchema.pre("remove", async function (next) {

    const story= await Story.findById(this._id)

    await Comment.deleteMany({
        story : story 
    })

})

StorySchema.methods.makeSlug = function () {
    return slugify(this.title, {
        replacement: '-',
        remove: /[*+~.()'"!:@/?]/g,
        lower: true,
        strict: false,
        locale: 'tr',
        trim: true
    })

}

const Story = mongoose.model("Story", StorySchema)

module.exports = Story;