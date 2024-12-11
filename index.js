exports.handler = async (event) => {
    if (event.path === '/prod/api' && event.httpMethod === 'GET') {
        const response = {
            statusCode: 200,
            body: JSON.stringify({ message: "Hello from Final project" }),
        };
        return response;
    }

    return {
        statusCode: 404,
        body: JSON.stringify({ message: "Not Found" }),
    };
};
