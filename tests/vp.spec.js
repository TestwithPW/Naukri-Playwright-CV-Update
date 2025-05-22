const { test, expect } = require('@playwright/test');

test.describe('UrShipper', () => {
    let context;
    let page;

    test.beforeAll(async ({ browser }) => {
        // Launch browser context and open a new page
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://app.staging.urshipper.com/login');
    });

    test('Login test with invalid & valid data', async () => {
        console.log('Page title:', await page.title());
        await expect(page).toHaveTitle('Log In');
        console.log('Page URL:', await page.url());
        await expect(page).toHaveURL('https://app.staging.urshipper.com/login');

        // Invalid login attempt
        await page.locator('input[placeholder="Email"]').fill("testeng682+2s@gmail.co");
        await page.locator('input[placeholder="Password"]').fill("Test@1234");
        await page.locator("[type='submit']").click();

        console.log(await page.locator(".ant-message-notice-content").textContent());
        await expect(page).toHaveURL('https://app.staging.urshipper.com/login'); // Ensures login failed

        // Valid login attempt
        await page.locator('input[placeholder="Email"]').fill("testeng682+2s@gmail.com");
        await page.locator('input[placeholder="Password"]').fill("Test@1234");
        await page.locator("[type='submit']").click();

        // Ensure login success
        await expect(page).toHaveURL('https://app.staging.urshipper.com/orders');
    });

    test('Order page test after login', async () => {
        console.log('Page URL:', await page.url());
        await expect(page).toHaveURL("https://app.staging.urshipper.com/orders");

        console.log('Page title:', await page.title());
        await expect(page).toHaveTitle("Orders");

        const createOrderVis = await page.locator("button[class='ant-btn css-ob0att ant-btn-primary ant-btn-lg']").isVisible();
        console.log('Create Order Button Visible:', createOrderVis);

        await expect(page).toHaveTitle("Orders");
    });

    test.afterAll(async () => {
        // Close browser context after all tests are done
        await context.close();
    });
});
