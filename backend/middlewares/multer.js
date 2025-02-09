import multer from "multer";

const storage = multer.memoryStorage(); // Store files in memory, not disk

export const multipleUpload = multer({ storage }).array("images", 4);
