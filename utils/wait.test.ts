import { wait } from "./"

describe('Wait util function', () => {
    test('waits at most 2000ms', async () => {
        const WAIT_TIME = 2000;
        const previousTime = Date.now();
        await wait(WAIT_TIME);
        const currentTime = Date.now();
        expect(currentTime - previousTime).toBeGreaterThanOrEqual(WAIT_TIME);
    })
    test('waits at most 1000ms', async () => {
        const WAIT_TIME = 1000;
        const previousTime = Date.now();
        await wait(WAIT_TIME);
        const currentTime = Date.now();
        expect(currentTime - previousTime).toBeGreaterThanOrEqual(WAIT_TIME);
    })
    
})