const { handler } = require('../../index');

test('Returns message from /api endpoint', async () => {
    const event = {
        path: '/api',
        httpMethod: 'GET'
    };
    const result = await handler(event);
    expect(result.statusCode).toBe(200);
    expect(result.headers['Access-Control-Allow-Origin']).toBe('*');
    expect(JSON.parse(result.body).message).toBe("Hello from Final project");
});

test('Returns 404 for unknown endpoint', async () => {
    const event = {
        path: '/unknown',
        httpMethod: 'GET'
    };
    const result = await handler(event);
    expect(result.statusCode).toBe(404);
    expect(result.headers['Access-Control-Allow-Origin']).toBe('*');
    expect(JSON.parse(result.body).message).toBe("Not Found");
});

test('Handles OPTIONS request for CORS preflight', async () => {
    const event = {
        httpMethod: 'OPTIONS'
    };
    const result = await handler(event);
    expect(result.statusCode).toBe(200);
    expect(result.headers['Access-Control-Allow-Origin']).toBe('*');
    expect(result.headers['Access-Control-Allow-Methods']).toBe('GET,OPTIONS');
    expect(result.headers['Access-Control-Allow-Headers']).toBe('Content-Type,Authorization');
    expect(JSON.parse(result.body).message).toBe("CORS check successful");
});

test('Returns correct headers for all responses', async () => {
    const events = [
        { path: '/api', httpMethod: 'GET' },
        { path: '/unknown', httpMethod: 'GET' },
        { httpMethod: 'OPTIONS' }
    ];

    for (const event of events) {
        const result = await handler(event);
        expect(result.headers['Access-Control-Allow-Origin']).toBe('*');
        expect(result.headers['Access-Control-Allow-Methods']).toBe('GET,OPTIONS');
        expect(result.headers['Access-Control-Allow-Headers']).toBe('Content-Type,Authorization');
    }
});

test('Returns 404 for unsupported HTTP method', async () => {
    const event = {
        path: '/api',
        httpMethod: 'POST' 
    };
    const result = await handler(event);
    expect(result.statusCode).toBe(404);
    expect(result.headers['Access-Control-Allow-Origin']).toBe('*');
    expect(JSON.parse(result.body).message).toBe("Not Found");
});
