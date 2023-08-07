import fs from "fs";
import path from "path";
const { resolve } = require('path')
import { createLanguageModel, createJsonTranslator } from "typechat";
import { JobTagResponse } from "./jobTagSchema";

const model = createLanguageModel({
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  OPENAI_MODEL: "gpt-3.5-turbo",
});

const currentDir = resolve('./')
// currentDir = typechat-api-project
const schema = fs.readFileSync(path.join(currentDir, "app/typechat/jobTagSchema.ts"), "utf8");
const translator = createJsonTranslator<JobTagResponse>(
  model,
  schema,
  "JobTagResponse"
);

// function to process the user input and return the Jobtag response
export async function getJobTagResponse(userInput: string) {
  try {
    const response = await translator.translate(userInput);
    if (response) {
      console.log("response", response);
      return response;
    }
  } catch (error) {
    return error;
  }
  return 'test1'
}
