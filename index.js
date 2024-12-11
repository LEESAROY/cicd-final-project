exports.handler = async (event) => {
    console.log('Event:', JSON.stringify(event, null, 2));

    if (event.path === '/api' && event.httpMethod === 'GET') {
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
