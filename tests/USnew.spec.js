const { test, expect } = require('@playwright/test');



test.describe('UrShipper', () => {
    let context;
    let page;

    test.beforeAll(async ({ browser }) => {
        // Launch browser context and open a new page
        context = await browser.newContext();
        page = await context.newPage();
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto('https://app.staging.urshipper.com/login');
    });

    test('Login', async ({ }) => {
      await page.goto('https://app.staging.urshipper.com/login');
      await page.getByRole('textbox', { name: 'Email' }).click();
      await page.getByRole('textbox', { name: 'Email' }).fill('testeng682+platinum@gmail.com');
      await page.getByRole('textbox', { name: 'Password' }).click();
      await page.getByRole('textbox', { name: 'Password' }).fill('Test@1234');
      await page.getByRole('button', { name: 'Log In' }).click();
      await expect(page.getByRole('button', { name: 'Create Order' })).toBeVisible();
      await expect(page.getByRole('heading')).toContainText('Orders');
    });

    







  });