import { test, expect } from '@playwright/test';

const rootURL = 'https://onskeskyen.dk/'

test('login with test user', async ({ page }) => {
    await page.goto(rootURL)
    await page.waitForURL("https://onskeskyen.dk/da")
    await expect((await page.title()).toString()).toBe("Ønskeskyen");
});
