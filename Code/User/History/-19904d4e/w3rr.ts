'use server';

import { ApiResponse } from '@ibc/lib/types';
import { v2 as cloudinary } from 'cloudinary';
import { logger } from '../app/logger';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

export const fetchPhotos = async (
  path: string,
  options?: any,
  callback?: any
): Promise<ApiResponse<{}>> => {
  try {
    let results = await cloudinary.api.resources_by_asset_folder(
      path,
      options,
      callback
    );
    return {
      status: 200,
      body: { results }
    };
  } catch (error) {
    logger.error('signUploadForm error:::: ', error);
    return {
      status: 500,
      error
    };
  }
};

export const signUploadForm = async (): Promise<
  ApiResponse<{
    timestamp: number;
    signature: string;
    cloudName: string;
    apiKey: string;
    folder: string;
  }>
> => {
  try {
    const timestamp = Math.round(new Date().getTime() / 1000);
    const folder = 'profile_pictures';
    const signature = cloudinary.utils.api_sign_request(
      {
        timestamp: timestamp,
        folder
      },
      process.env.CLOUDINARY_API_SECRET
    );

    return {
      status: 200,
      body: {
        signature: signature,
        timestamp: timestamp,
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        folder
      }
    };
  } catch (error) {
    logger.error('signUploadForm error:::: ', error);
    return {
      status: 500,
      error
    };
  }
};
