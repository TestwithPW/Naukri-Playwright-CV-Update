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

    test('Login test with invalid & valid data', async () => {
        console.log('Page title:', await page.title());
        await expect(page).toHaveTitle('Log In');
        console.log('Page URL:', await page.url());
        await expect(page).toHaveURL('https://app.staging.urshipper.com/login');

        // Invalid login attempt
        await page.locator('input[placeholder="Email"]').fill("testeng682+2s@gmail.co");
        await page.locator('input[placeholder="Password"]').fill("Test@12345");
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

    test('Create Order Ship From - Ship to', async () => {
      
      await page.getByRole('button', { name: 'Create Order' }).click();
      await page.locator('.ant-form-item-control-input-content > .ant-input').first().click();
      await page.locator('.ant-form-item-control-input-content > .ant-input').first().fill('Vivek V');
      await page.locator('div:nth-child(2) > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').first().dblclick();
      await page.locator('div:nth-child(2) > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').first().fill('TestTribe');
      await page.locator('.ant-form-item-control-input-content > .flex > .ant-input').first().click();
      await page.locator('.ant-form-item-control-input-content > .flex > .ant-input').first().fill('898787545646');
      await page.getByText('🇮🇩 +').click();
      await page.locator('#rc_select_4').fill('indo');
      await page.getByText('Indonesia +').click();
      await page.getByRole('textbox', { name: 'Email' }).click();
      await page.getByRole('textbox', { name: 'Email' }).fill('testeng682+5@gmail.com');
      await page.getByText('Indonesia', { exact: true }).click();
      await page.locator('#rc_select_5').fill('indo');
      await page.getByRole('option', { name: 'Indonesia' }).locator('div').click();
      await page.locator('div').filter({ hasText: /^Country\*IndonesiaIndonesiaCity\*$/ }).getByRole('textbox').click();
      await page.locator('div').filter({ hasText: /^Country\*IndonesiaCity\*$/ }).getByRole('textbox').fill('Densapar');
      await page.locator('div').filter({ hasText: /^StatePostal Code\*$/ }).getByRole('textbox').first().click();
      await page.locator('div').filter({ hasText: /^StatePostal Code\*$/ }).getByRole('textbox').first().fill('Bali');
      await page.locator('div').filter({ hasText: /^StatePostal Code\*$/ }).getByRole('textbox').nth(1).click();
      await page.locator('div').filter({ hasText: /^StatePostal Code\*$/ }).getByRole('textbox').nth(1).fill('80117');
      await page.getByText('PASSPORT').click();
      await page.getByText('PASSPORT').nth(2).click();
      await page.locator('div').filter({ hasText: /^Type of Legal ID\*PASSPORTPASSPORTID Number\*$/ }).getByRole('textbox').click();
      await page.locator('div').filter({ hasText: /^Type of Legal ID\*PASSPORTID Number\*$/ }).getByRole('textbox').fill('8797979797');
      await page.locator('form:nth-child(2) > div:nth-child(3) > div > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').first().click();
      await page.locator('form:nth-child(2) > div:nth-child(3) > div > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').first().fill('Prasanna ');
      await page.locator('form:nth-child(2) > div:nth-child(3) > div > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').first().press('CapsLock');
      await page.locator('form:nth-child(2) > div:nth-child(3) > div > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').first().fill('Prasanna w');
      await page.locator('form:nth-child(2) > div:nth-child(3) > div > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').first().press('CapsLock');
      await page.locator('form:nth-child(2) > div:nth-child(3) > div > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').first().fill('Prasanna W');
      await page.locator('form:nth-child(2) > div:nth-child(3) > div:nth-child(2) > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').click();
      await page.locator('form:nth-child(2) > div:nth-child(3) > div:nth-child(2) > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').fill('PW traders');
      await page.locator('#rc_select_8').click();
      await page.locator('#rc_select_8').fill('indi');
      await page.getByText('India +').click();
      await page.locator('div').filter({ hasText: /^IN🇮🇳 \+91Phone Number is invalid$/ }).getByRole('textbox').click();
      await page.locator('div').filter({ hasText: /^🇮🇳 \+91Phone Number is invalid$/ }).getByRole('textbox').fill('9096265222');
      await page.locator('form:nth-child(2) > div:nth-child(5) > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').click();
      await page.locator('form:nth-child(2) > div:nth-child(5) > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').fill('testeng682+6@gmail.com');
      await page.locator('form:nth-child(2) > div:nth-child(6) > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').click();
      await page.locator('form:nth-child(2) > div:nth-child(6) > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').fill('Marine Drive');
      await page.locator('div').filter({ hasText: /^Country\*$/ }).nth(1).click();
      await page.locator('div').filter({ hasText: /^Country\*IndiaCity\*$/ }).getByRole('textbox').click();
      await page.locator('div').filter({ hasText: /^Country\*IndiaCity\*$/ }).getByRole('textbox').fill('Mumbai');
      await page.locator('form:nth-child(2) > div:nth-child(9) > div > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').first().click();
      await page.locator('form:nth-child(2) > div:nth-child(9) > div > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').first().fill('Maharashtra');
      await page.locator('form:nth-child(2) > div:nth-child(9) > div:nth-child(2) > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').click();
      await page.locator('form:nth-child(2) > div:nth-child(9) > div:nth-child(2) > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').fill('400100');
      await page.locator('form:nth-child(2) > div:nth-child(10) > div > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector > .ant-select-selection-item').click();
      await page.getByTitle('VAT').locator('div').click();
      // await page.locator('div').filter({ hasText: /^Type of Tax IDVATVATID NumberID number is required$/ }).getByRole('textbox').click();
      await page.locator('div').filter({ hasText: /^Type of Tax IDVATVATID NumberID number is required$/ }).getByRole('textbox').fill('87997979797979');
      await page.getByRole('button', { name: 'Next Step' }).click();
    });

    test('Create Order Add Item', async () => {
      await page.getByRole('button', { name: '+ Add Item' }).click();
      await page.getByLabel('Item Details').getByText('Hand bag Male edit').click();
      await page.getByLabel('Item Details').getByText('Hand bag Male edit').fill('Hand bag - Women');
      await page.getByRole('dialog', { name: 'Item Details' }).getByPlaceholder('0').first().click();
      await page.getByRole('dialog', { name: 'Item Details' }).getByPlaceholder('0').first().fill('10');
      await page.getByRole('dialog', { name: 'Item Details' }).getByPlaceholder('0').nth(1).click();
      await page.getByRole('dialog', { name: 'Item Details' }).getByPlaceholder('0').nth(1).fill('.5');
      await page.locator('div').filter({ hasText: /^Unit Value\*Currency\*INR$/ }).getByPlaceholder('0').click();
      await page.locator('div').filter({ hasText: /^Unit Value\*Currency\*INR$/ }).getByPlaceholder('0').fill('60000');
      await page.getByText('INR', { exact: true }).click();
      await page.locator('#rc_select_13').fill('IDR');
      await page.getByTitle('IDR').locator('div').click();
      await page.getByText('India', { exact: true }).click();
      await page.locator('#rc_select_14').fill('Indo');
      await page.getByTitle('Indonesia').locator('div').click();
      await page.getByRole('dialog', { name: 'Item Details' }).locator('input[type="text"]').click();
      await page.getByRole('dialog', { name: 'Item Details' }).locator('input[type="text"]').fill('0000877897');
      await page.getByRole('button', { name: 'Add', exact: true }).click();
    });

    test('Create Order Add Package', async () => {
      await page.getByRole('button', { name: '+ Add Package' }).click();
      await page.getByText('Kg pacakge (20 x 30 x 4 cm)').nth(1).click();
      await page.getByText('0.5 kg package (20 x 30 x 4').click();
      await page.locator('div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > .grid > div > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-number-group-wrapper > .ant-input-number-wrapper > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').first().click();
      await page.locator('div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').click();
      await page.locator('div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').fill('10');
      await page.locator('div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-number-group-wrapper > .ant-input-number-wrapper > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').click();
      await page.locator('div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > .ant-row > div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input-number-group-wrapper > .ant-input-number-wrapper > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').fill('0.5');
      await page.getByRole('button', { name: 'Add', exact: true }).click();
    });

    test('Create Order Enable Signature', async () => {
      await page.getByRole('switch').click();
      await page.getByRole('switch').click(); 
    });

    test('Create Order Select Date', async () => {
      await page.getByRole('textbox', { name: 'Select date' }).click();
      await page.getByTitle('-04-10').locator('div').click();
      await expect(page.getByText('Cheapest')).toBeVisible();
      const ratevisibility = await page.getByText('Cheapest').isVisible();
      console.log('Rates are Visible:', ratevisibility);
    });

    test('Create Order Create Urshipper Label', async () => {

      let ratecardHeading;

      // Try to find "UrShipper x Purple Economy" first
      ratecardHeading = page.getByRole('heading', { name: 'UrShipper x Purple Economy', exact: true });
    
      if (!(await ratecardHeading.isVisible())) {
        // If not found, try "UrShipper x Purple Priority"
        ratecardHeading = page.getByRole('heading', { name: 'UrShipper x Purple Priority', exact: true });
    
        if (!(await ratecardHeading.isVisible())) {
          console.log("Neither 'UrShipper x Purple Economy' nor 'UrShipper x Purple Priority' cards were visible.");
          expect.fail("Neither 'UrShipper x Purple Economy' nor 'UrShipper x Purple Priority' cards were visible.");
          return; // Stop the test
        } else {
          console.log("Card with text 'UrShipper x Purple Priority' is visible.");
        }
    
      } else {
        console.log("Card with text 'UrShipper x Purple Economy' is visible.");
      }
    
      await ratecardHeading.click(); // Click the found card
    
      await page.getByRole('button', { name: 'Create Label' }).click();
      const page1Promise = page.waitForEvent('popup');
      await page.locator('span').filter({ hasText: 'Your label is ready to be printed!Print Label' }).getByRole('button').first().click();
      const page1 = await page1Promise;
    
      const createordervisible = await expect(page.getByRole('button', { name: 'Create Order' })).toBeVisible();
      console.log('Create Order button is Visible:', createordervisible);
      console.log('Page URL:', await page.url());
      await expect(page).toHaveURL('https://app.staging.urshipper.com/orders');
    });

    test.afterAll(async () => {
        // Close browser context after all tests are done
        await context.close();
    });
});