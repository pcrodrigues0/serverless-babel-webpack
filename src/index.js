import {createResponse} from './helpers/response';

export const handler = async (event, context) => {
  return createResponse(200, {
    message: "Encountered a teste!"
  });
};
