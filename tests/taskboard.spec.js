const { test } = require('@playwright/test');
const LoginPage = require('./pages/loginPage');
const ProjectPage = require('./pages/projectPage');
const config = require('../config/test.config');
const testData = require('./data/tasks.json');

test.describe('Task Board Tests', () => {
    let loginPage;
    let projectPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        projectPage = new ProjectPage(page);
        
        await loginPage.login(
            config.credentials.username, 
            config.credentials.password
        );
    });

    // Run each test case in our tasks.json file
    for (const testCase of testData.testCases) {
        test(`Verify "${testCase.name}" in ${testCase.project}`, async ({ page }) => {
            await projectPage.navigateToProject(testCase.project);
            const taskCard = await projectPage.verifyTaskInColumn(testCase.name, testCase.column);
            await projectPage.verifyTaskTags(taskCard, testCase.tags);
        });
    }
});