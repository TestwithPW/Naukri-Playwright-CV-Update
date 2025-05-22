const {test, expect} = require('@playwright/test');


    test('login', async ({page})=> {

        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        
        await page.locator("#username").fill("anshika@gmail.com");
        await page.locator("#password").type("Iamking@000");
        await page.locator("#signInBtn").click();

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



