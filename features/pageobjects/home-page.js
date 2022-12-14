const Page = require('./page')

class HomePage extends Page {

    get accountName() {
        return $('#nameofuser')
    }

    get buttonLogout() {
        return $(`[onclick='logOut()']`)
    }

    getProductNameLocator(itemName) {
        return $(`//a[text()='${itemName}']`)
    }

    async clickProductName(itemName) {
        await browser.pause(2000)
        await this.getProductNameLocator(itemName).scrollIntoView(({block:'center'})
        )
        await browser.pause(1000)
        await this.getProductNameLocator(itemName).click()
    }

    
    async verifyLoginSuccess(user) {
        return await expect(await this.accountName).toHaveTextContaining(user)
    }

    async verifyLogutSuccess() {
        return await expect(await this.buttonLogout).click()
    }

//     async verifyLogoutSuccess(user) {
//         return await expect(await this.accountName).toHaveTextContaining(user)
// }
}

module.exports = new HomePage();

    