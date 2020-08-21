export const createResponse = (statusCode, message) => {
    return {
        statusCode: statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(message)
    };
};
