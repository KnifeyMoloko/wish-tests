import { test } from '../fixtures/base';

test('basic overview test', async ({ overviewPage }) => {
    await overviewPage.goto();
    await overviewPage.verifyHeaderAndButtons();
    await overviewPage.verifyAllCarousels();
});
