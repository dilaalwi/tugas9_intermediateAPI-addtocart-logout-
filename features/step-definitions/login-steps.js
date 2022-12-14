const {Given, When, Then, setWorldConstructor} = require('@wdio/cucumber-framework');

const FrontPage = require('../pageobjects/front-page')
const HomePage = require('../pageobjects/home-page');
const CartPage = require('../pageobjects/cart-page');
const cartPage = require('../pageobjects/cart-page');
const homePage = require('../pageobjects/home-page');

// Given(/^I am on the front page$/, async() => {
//     await FrontPage.open()
// })

Given('I am on the front page', async() => {
    await FrontPage.open()
})

When(/^I try to login with correct credential$/, async() => {
    await FrontPage.login('wibowo.bullseye', 'bullseye');
})

Then (/^I am successfully logged in$/, async() => {
    await HomePage.verifyLoginSuccess('wibowo.bullseye')
})


// When(/^I try to login with username "(.*)" and password "(.*)"$/, async(username, password) => {
//     await FrontPage.login(username, password)
// })

When('I try to login with username {string} and password {string}', async(username, password) => {
    await FrontPage.login(username, password)
})

Then(/^I am successfully logged in with username "(.*)"$/, async(username) => {
    await HomePage.verifyLoginSuccess(username)
})

When('I add item {string} to cart', async(itemName) => {
    await HomePage.clickProductName(itemName)
    await CartPage.clickBtnAddToCart()
    await browser.pause(2000)
    await CartPage.clickokAlert()
    await cartPage.clickBrowserBackBtn()
    await browser.pause(5000)
    
})
When('I add these items to cart :', async(table) => {
  // Write code here that turns the phrase above into concrete actions
  let data = table.hashes()
  for(let i = 0; i < data.length; i++) {
    await HomePage.clickProductName(data[i].itemName)
    await CartPage.clickBtnAddToCart()
    await browser.pause(2000)
    await CartPage.clickokAlert()
    await cartPage.clickBrowserBackBtn()
    await browser.pause(2000)
  }


//   console.log(JSON.stringify(data))
})

When('I try to Logout', async() => {
    await HomePage.open()
    await HomePage.buttonLogout() 
    await browser.pause(5000)
  // Write code here that turns the phrase above into concrete actions
})


// Then('I try to logout', async() => {
//   await HomePage.open()
//   await homePage.buttonLogout()
//   await browser.pause(5000)
//   // Write code here that turns the phrase above into concrete actions
// })



When('I try to login with username {string} and password {string}', async(username, password) => {
  await FrontPage.login(username,password)
  // Write code here that turns the phrase above into concrete actions
})

When('I try to logout', async() => {
  await HomePage.open()
  await HomePage.buttonLogout()
  await browser.pause(5000)
  // Write code here that turns the phrase above into concrete actions
})

Then('I am successfully logout', async() => {
  await HomePage.verifyLogutSuccess(click)

  // Write code here that turns the phrase above into concrete actions
})



// Then('I am successfully logout', () => {
//   // Write code here that turns the phrase above into concrete actions
// })

// Then('I am successfully Logout', () => {
  // Write code here that turns the phrase above into concrete actions
// })

// Then('I am successfully Logout', async() => {
//     await HomePage.verifyLogoutSuccess()
//   // Write code here that turns the phrase above into concrete actions
// })
