exports.handler = async (event) => {
    console.log('Event:', JSON.stringify(event, null, 2));

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type,Authorization'
    };

    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify({ message: "CORS check successful" })
        };
    }

    if (event.path === '/api' && event.httpMethod === 'GET') {
        return {
            statusCode: 200,
            headers: headers,
            body: JSON.stringify({ message: "Hello from Final project" })
        };
    }

    return {
        statusCode: 404,
        headers: headers,
        body: JSON.stringify({ message: "Not Found" })
    };
};
