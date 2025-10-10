import { test, expect } from '@playwright/test';
import path from 'path';

const storageStateFile = path.join(__dirname, '../playwright/.auth/storageState.json')
const rootURL = 'https://onskeskyen.dk/'
const overviewURL = 'https://onskeskyen.dk/overview'

test('login with test user', async ({ page }) => {
    const username = process.env.WISH_USER || 'no USERNAME value!'
    const password = process.env.PASSWORD || 'no PASSWORD value!'
    await page.goto(rootURL)
    await page.waitForURL("https://onskeskyen.dk/da")

    await page.getByRole('button', { name: 'Accepter alle' }).click();
    await page.getByRole('button', { name: 'Log ind' }).click();
    await page.getByRole('button', { name: 'Fortsæt med e-mail' }).click();
    await page.getByRole('textbox', { name: 'E-mail' }).fill(username);
    await page.getByTestId('loginPasswordInput').click();
    await page.getByTestId('loginPasswordInput').fill(password);
    await page.getByRole('dialog').getByRole('button', { name: 'Log ind' }).click();
    await page.waitForURL(overviewURL)

    await page.context().storageState({ path: storageStateFile })
});
