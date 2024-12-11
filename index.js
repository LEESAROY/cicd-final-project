exports.handler = async (event) => {
    console.log('Event:', JSON.stringify(event, null, 2));

    if (event.path === '/api' && event.httpMethod === 'GET') {
        const response = {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type,Authorization'
            },
            body: JSON.stringify({ message: "Hello from Final project" })
        };
        return response;
    }

    return {
        statusCode: 404,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type,Authorization'
        },
        body: JSON.stringify({ message: "Not Found" })
    };
};
