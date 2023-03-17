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
        //   console.log(err, fields, files);
          console.log(files);
        });
        res.status(200).json({ message: 'Success!' });
    } catch (error) {
    console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
