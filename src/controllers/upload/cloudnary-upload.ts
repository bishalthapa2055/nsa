import { v2 as cloudinary } from 'cloudinary';
import { Request, Response } from 'express';
import multer from 'multer';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
});

// Check if environment variables are set
if (!process.env.CLOUD_NAME || !process.env.CLOUD_API_KEY || !process.env.CLOUD_API_SECRET) {
  throw new Error('Missing Cloudinary configuration environment variables.');
}

// Set up Multer storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

export const CloundnaryUpload = async (req: Request, res: Response) => {
  try {
    // Middleware to handle file upload
    upload.single('image')(req, res, async (err: any) => {
      if (err) {
        return res.status(400).json({ status: false, error: err.message });
      }

      if (!req.file) {
        return res.status(400).json({ status: false, error: 'No file uploaded' });
      }

      try {
        // Upload image to Cloudinary
        const uploadResult = await new Promise<any>((resolve, reject) => {
          cloudinary.uploader.upload_stream(
            { public_id: 'image_upload', folder: 'my_folder' },
            (error, result) => {
              if (error) {
                console.error('Cloudinary upload error:', error);
                return reject(error);
              }
              resolve(result);
            }
          ).end(req.file?.buffer);
        });

        // Send response with uploaded image URL
        res.status(200).json({
          status: true,
          url: uploadResult?.secure_url
        });
      } catch (error) {
        console.error('Error during Cloudinary upload:', error);
        res.status(500).json({
          status: false,
          error: 'Error uploading to Cloudinary'
        });
      }
    });
  } catch (error) {
    console.error('Unexpected error:', error);
    res.status(500).json({
      status: false,
      error: (error as any).message ? (error as any).message : 'Unexpected backend error'
    });
  }
};

export { CloundnaryUpload as CloundnaryUploadHandler };
