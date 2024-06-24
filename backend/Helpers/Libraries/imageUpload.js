const multer = require('multer');
const path = require('path');
const fs = require('fs');
const CustomError = require('../error/CustomError');

// Function to ensure directory exists
const ensureDirExists = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

// Function to sanitize filenames
const sanitizeFilename = (filename) => {
    return filename.replace(/[<>:"\/\\|?*\x00-\x1F\x7F]+/g, '_');
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const rootDir = path.dirname(require.main.filename);
        let dir;

        if (file.fieldname === "photo") {
            dir = path.join(rootDir, "/public/userPhotos");
        } else {
            dir = path.join(rootDir, "/public/storyImages");
        }

        ensureDirExists(dir);
        cb(null, dir);
    },

    filename: function (req, file, cb) {
        const sanitizedOriginalname = sanitizeFilename(file.originalname);

        if (file.fieldname === "photo") {
            const extension = file.mimetype.split("/")[1];
            req.savedUserPhoto = `photo_user_${req.user.id}.${extension}`;
            cb(null, req.savedUserPhoto);
        } else {
            req.savedStoryImage = `image_${new Date().toISOString().replace(/:/g, '-')}_${sanitizedOriginalname}`;
            cb(null, req.savedStoryImage);
        }
    }
});

const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ["image/jpeg", "image/jpg", "image/png", "image/gif", "image/heic", "image/heiv"];

    if (!allowedMimeTypes.includes(file.mimetype)) {
        return cb(new CustomError("Please provide a valid image file", 400), false);
    }

    cb(null, true);
};

const imageUpload = multer({ storage, fileFilter });

module.exports = imageUpload;
