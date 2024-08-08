import ky from 'ky';
import dotenv from 'dotenv';

export default async ({ req, res, log, error }) => {
  dotenv.config();
  const url = process.env.DIFY_API_URL;
  log(`Start request ${url}`);
  const apiKey = process.DIFY_API_KEY;
  const response = await ky.post(url, {
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    json: {
      inputs: {},
      response_mode: "blocking",
      user: "appwrite"
    }
  }).json();



  log(`Request finished! ${response}`);

  return res.empty();
};