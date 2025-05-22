const {test, expect} = require('@playwright/test')

test('test with browser fixture', async({browser})=>
    {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto('https://app.staging.urshipper.com/login');

}); // this stpe can be replaced by below code with "page" fixture

test.only('test with page fixture', async({page})=>{
    
    await page.goto('https://app.staging.urshipper.com/login'); 

    // const pageTitle = await page.title();
    // console.log('page title is:', pageTitle);
    console.log('page title is:', await page.title());
    await expect(page).toHaveTitle('Log In')

    // const pgURL= await page.url();
    // console.log('page URL is:', pgURL);
    console.log('page URL is:', await page.url());
    await expect(page).toHaveURL('https://app.staging.urshipper.com/login');

   await page.locator('input[placeholder="Email"]').fill("testeng682+2s@gmail.co");
   await page.locator('input[placeholder="Password"]').fill("Test@1234");
   await page.locator("[type='submit']").click();


   console.log(await page.locator(".ant-message-notice-content").textContent());

//    console.log('page URL is:', await page.url());
//    await expect(page).toHaveURL('https://app.staging.urshipper.com/orders');

//    console.log('page title is:', await page.title());
//    await expect(page).toHaveTitle('Orders')


});