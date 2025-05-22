import { test, expect } from '@playwright/test';

const path = require('path'); 

test.describe('UrShipper', () => {
    let context;
    let page;

        test.beforeAll(async ({ browser }) => {
            // Launch browser context and open a new page
            context = await browser.newContext();
            page = await context.newPage();
            await page.setViewportSize({ width: 1920, height: 1080 });
            await page.goto('https://www.naukri.com/');
            await expect(page.getByRole('link', { name: 'Login', exact: true })).toBeVisible();
        });


        test('Login', async ({}) => {
            await page.getByRole('link', { name: 'Login', exact: true }).click();
            await page.getByRole('textbox', { name: 'Enter your active Email ID /' }).click();
            await page.getByRole('textbox', { name: 'Enter your active Email ID /' }).fill('prasanna95w@gmail.com');
            await page.getByRole('textbox', { name: 'Enter your password' }).click();
            await page.getByRole('textbox', { name: 'Enter your password' }).fill('Rachu@1824');
            await page.getByText('Show', { exact: true }).click();
            await page.getByRole('button', { name: 'Login', exact: true }).click();
            await expect(page.locator('.nI-gNb-drawer__icon')).toBeVisible();

        });



        test('Update Profile', async ({}) => {

            await page.getByRole('img', { name: 'naukri user profile img' }).click();
            await expect(page.getByRole('link', { name: 'View & Update Profile' })).toBeVisible();
            await page.getByRole('link', { name: 'View & Update Profile' }).click();
            

            await expect(page.getByRole('button', { name: 'Update resume' })).toBeVisible();

            // Construct the absolute path to your CV
            const cvFilePath = path.join('C:', 'Users', 'prasa', 'Downloads', 'Prasanna S. W. - CV.pdf');

            console.log(`Attempting to upload file from: ${cvFilePath}`);

            // Click the 'Update resume' button, which typically opens the file dialog
            await page.getByRole('button', { name: 'Update resume' }).click();

            // Then, set the file on the *actual* file input element.
            await page.locator('#attachCV').setInputFiles(cvFilePath);
            // OR if you find '#fileUpload' is the correct one:
            // await page.locator('#fileUpload').setInputFiles(cvFilePath);

            // Add an assertion here to confirm the upload was successful.
            await expect(page.getByText('SuccessResume has been successfully uploaded.')).toBeVisible();

            console.log("CV upload process initiated. Please check Naukri.com for confirmation.");
        });

    test.afterAll(async () => {
        await context.close();
    });
});
