import { test, expect } from '../fixtures/base';

test('visual comparison for cat wishlist', async ({ overviewPage, page }) => {
    await overviewPage.goto();
    await overviewPage.clickOnCatlistCard();
    await expect(page).toHaveScreenshot('catlist.png', { maxDiffPixelRatio: 0.02 });
});
