import main from "./main.js";
import dotenv from 'dotenv';

dotenv.config();
// Simulate the req and res objects
const req = {
  method: 'GET', // Change this to 'POST' if needed
};

const res = {
  send: (data) => {
    console.log(data);
  },
  json: (data) => {
    console.log(JSON.stringify(data, null, 2));
  },
  empty: () => {
    console.log("empty");
  },
};

const log = console.log;
const error = console.error;

main({ req, res, log, error });