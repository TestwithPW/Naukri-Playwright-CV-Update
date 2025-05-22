const {test, expect} = require('@playwright/test');

test.describe('rsassignment', ()=> {
 
    let context;
    let page;
    test.beforeAll(async ({browser}) => {
        context = await browser.newContext();
        page = await context.newPage();
     
        await page.goto('https://rahulshettyacademy.com/client');
        console.log(await page.title());
        await expect(page).toHaveTitle("Let's Shop");
    });
    

    test('register a user', async () => { 

        await page.locator('.text-reset').click();

        const titlevis = await page.locator('.login-title').isVisible();
        console.log(titlevis);

        await page.locator('#firstName').fill("test");
        await page.locator('#lastName').fill("eng");
        await page.locator('#userEmail').fill("testeng682+qwsd@gmail.com");
        await page.locator('#userMobile').fill("7854687947");
    
        const dropdown = page.locator("[formcontrolname='occupation']");
        await  dropdown.selectOption("Scientist");
        await page.locator("input[value='Male']").click();
        await page.locator('#userPassword').fill("Test@1234");
        await page.locator('#confirmPassword').fill("Test@1234");
        await page.locator("input[type='checkbox']").check();
        await page.locator("#login").click();

        const accregvis = await page.locator('.headcolor').isVisible();
        console.log(accregvis);

        await page.locator(".btn.btn-primary").click();

        console.log(await page.title());
        await expect(page).toHaveTitle("Let's Shop");

    });


    test('login', async ()=> {
        
        await page.locator("#userEmail").fill("testeng682+445@gmail.com");
        await page.locator("#userPassword").fill("Test@1234");
        await page.locator("#login").click();

        // await page.locator("body > app-root:nth-child(1) > app-dashboard:nth-child(2) > section:nth-child(5) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)")

        // await page.waitForLoadState('networkidle'); if this not worked then the alternative is below line 
        await page.locator(".card-body b").first().waitFor();

        const titles = await page.locator(".card-body b").allTextContents();
        console.log(titles);
        const firsttitle = await page.locator(".card-body b").first().textContent();
        console.log(firsttitle);

        const nthtitle0 = await page.locator(".card-body b").nth(0).textContent();
        console.log(nthtitle0);

        const nthtitle1 = await page.locator(".card-body b").nth(1).textContent();
        console.log(nthtitle1);

        const nthtitle2 = await page.locator(".card-body b").nth(2).textContent();
        console.log(nthtitle2);

        const lasttitle = await page.locator(".card-body b").last().textContent();
        console.log(lasttitle);
    });



});