import ky from 'ky';


export default async ({ req, res, log, error }) => {
  const url = process.env.DIFY_API_URL;
  log(`Start request ${url}`);
  const apiKey = process.env.DIFY_API_KEY;
  const response = await ky.post(url, {
    timeout: 2*60*1000,
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



  log(`Request finished! ${response.status}`);

  return res.empty();
};