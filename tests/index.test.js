const lambda = require('../src/index');

describe('Lambda Function', () => {
    it('should return a 200 status code with correct message', async () => {
        const event = {
            path: '/api/data',
            httpMethod: 'GET'
        };
        
        const result = await lambda.handler(event);
        
        expect(result.statusCode).toBe(200);
        expect(JSON.parse(result.body).message).toBe("Hello from Final project");
    });

    it('should return a 404 status code for unknown path', async () => {
        const event = {
            path: '/unknown',
            httpMethod: 'GET'
        };
        
        const result = await lambda.handler(event);
        
        expect(result.statusCode).toBe(404);
    });

});
