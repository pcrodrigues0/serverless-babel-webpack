import {createResponse} from './helpers/response';

export const handler = async (event, context) =>
  createResponse(200, {
    message: "Encountered a test!"
  });
