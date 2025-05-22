const { test, expect } = require('@playwright/test');

test.describe('PSI', () => {
    let context;
    let page;

    test.beforeAll(async ({ browser }) => {
        // Launch browser context and open a new page
        context = await browser.newContext();
        page = await context.newPage();
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto('https://staging.psi.tech/login');
    });

    test('Login as Admin', async () => {
        await page.locator('[data-test-id="email-inp"]').click();
        await page.locator('[data-test-id="email-inp"]').fill('prasanna.wadgaonkar+12@raftlabs.co');
        await page.locator('[data-test-id="password-inp"]').click();
        await page.locator('[data-test-id="password-inp"]').fill('Test@1682');
        await page.locator('[data-test-id="sign-in-btn"]').click();

        // Wait for successful login - adjust the selector based on your application's post-login state
        await page.waitForSelector('[data-test-id="new-discussion-btn"]', { timeout: 5000 });
        await expect(page).toHaveURL(/admin/); // Basic check that URL contains /admin/
    });

    test('Close trail ending and Click on Create Discussion ', async () => {
        // Wait for the "Trial Ending" text to be visible
        const trialEndingText = page.getByText('Trial Ending');
        await trialEndingText.waitFor({ state: 'visible', timeout: 10000 });
        await expect(trialEndingText).toBeVisible();

        // Click the "Okay" button
        const okayButton = page.getByRole('button', { name: 'Okay' });
        await okayButton.click();

        // Wait for the "Create New Discussion" button to be visible and then click it
        const newDiscussionButton = page.locator('[data-test-id="new-discussion-btn"]');
        await newDiscussionButton.waitFor({ state: 'visible', timeout: 10000 });
        await newDiscussionButton.click();

        // Assert that the "New Discussion" heading is visible
        const newDiscussionHeading = page.getByRole('heading', { name: 'New Discussion' });
        await newDiscussionHeading.waitFor({ state: 'visible', timeout: 10000 });
        await expect(newDiscussionHeading).toBeVisible();
        console.log('New Discussion page is visible:', await newDiscussionHeading.isVisible());
    });

   
});