const { handler } = require('../../index');

test('Returns message from /prod/api endpoint', async () => {
    const event = {
        path: '/prod/api',
        httpMethod: 'GET'
    };
    const result = await handler(event);
    expect(result.statusCode).toBe(200);
    expect(JSON.parse(result.body).message).toBe("Hello from Final project");
});

test('Returns 404 for unknown endpoint', async () => {
    const event = {
        path: '/unknown',
        httpMethod: 'GET'
    };
    const result = await handler(event);
    expect(result.statusCode).toBe(404);
});
