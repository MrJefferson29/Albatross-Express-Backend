const CustomError = require("../error/CustomError");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Create a function to ensure directory existence
const ensureDirectoryExistence = (filePath) => {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = '/tmp/uploads';

        // Ensure the directory exists or create it
        ensureDirectoryExistence(uploadDir);

        cb(null, uploadDir);
    },

    filename: function (req, file, cb) {
        const extension = file.mimetype.split("/")[1];

        if (file.fieldname === "photo") {
            req.savedUserPhoto = `photo_user_${req.user.id}.${extension}`;
            cb(null, req.savedUserPhoto);
        } else {
            req.savedStoryImage = `image_${new Date().toISOString().replace(/:/g, '-')}${path.extname(file.originalname)}`;
            cb(null, req.savedStoryImage);
        }
    }
});

const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/heic", "image/heiv"];

    if (!allowedMimeTypes.includes(file.mimetype)) {
        cb(new CustomError("Please provide a valid image file", 400), false);
    } else {
        cb(null, true);
    }
};

const imageUpload = multer({ storage, fileFilter });

module.exports = imageUpload;
