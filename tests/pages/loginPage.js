class LoginPage {
    constructor(page) {
        this.page = page;
    }

    async login(username, password) {
        // Navigate to the application URL
        await this.page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
        
        // Fill in the login form using ID selectors
        await this.page.fill('#username', username);
        await this.page.fill('#password', password);
        
        // Click the submit button
        await this.page.click('button[type="submit"]');
        
        // Wait for the logout button to be visible, confirming successful login
        await this.page.waitForSelector('button:has-text("Logout")');
    }

    // Helper method to check if user is logged in
    async isLoggedIn() {
        return await this.page.isVisible('button:has-text("Logout")');
    }
}

module.exports = LoginPage;