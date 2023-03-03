import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { Configuration, OpenAIApi } from "openai";
import { promises as fs } from "fs";

const app = express();
app.use(cors());

const configuration = new Configuration({
  engine: "davinci",
  apiKey: process.env.OPENAI_API_KEY,
});

async function getFileInfo() {
  const fileContents = await fs.readFile("./.env_file", "utf8");
  return fileContents;
}

let fileInfo;
async function init() {
  fileInfo = await getFileInfo();
}

const openai = new OpenAIApi(configuration);
// init();

app.get("/getdata/:msg", async (req, res) => {
  let msg = req.params.msg;

  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message:
          "OpenAI API key not configured, please follow instructions in README.md",
      },
    });
    return;
  }

  if (!msg) {
    return res.send("");
  }

  //msg = fileInfo + " \n" + msg;
  let message = await sendMessage(msg);
  return res.send(message);
});

async function sendMessage(message) {
  const completion = await openai.createCompletion({
    prompt: message,
    max_tokens: 300,
    stop: "\n",
    model: "text-babbage-001", //text-babbage-001 //text-davinci-003
  });

  console.log(completion.data);
  return completion.data.choices[0].text;
}

app.listen(3003);
