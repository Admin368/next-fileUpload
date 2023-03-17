import fs from 'fs';
import path from 'path';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
    try {
        // Your code here
        const form = new formidable.IncomingForm();
        form.uploadDir = "uploads";
        form.keepExtensions = true;
        form.parse(req, (err, fields, files) => {
            // console.log(err, fields, files);
            const file = files;
            const oldName = files.file.newFilename;
            const fileName = files.file.originalFilename;
            console.log(oldName);
            console.log(fileName);
            // const oldPath = files.file.path;
            const oldPath = path.join(form.uploadDir, oldName);
            const newPath = path.join(form.uploadDir, oldName+fileName);
            fs.rename(oldPath, newPath, (err) => {
                // if (err) throw err;
                console.log('File renamed successfully!');
            });
        });
        res.status(200).json({ message: 'Success!' });
    } catch (error) {
        // console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};