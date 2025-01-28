const { expect } = require('@playwright/test');

class ProjectPage {
    constructor(page) {
        this.page = page;
    }

    async navigateToProject(projectName) {
        await this.page.click(`button:has(h2:text("${projectName}")).w-full.text-left`);
    }

    async verifyTaskInColumn(taskName, columnName) {
        // First find the column container
        const columnContainer = this.page.locator(`div.flex.flex-col.w-80:has(h2:text("${columnName}"))`);
        
        // Then find the task within that column
        const taskCard = columnContainer.locator(`div.bg-white:has(h3:text("${taskName}"))`);
        
        // Verify the task exists in this column
        await expect(taskCard).toBeVisible();
        
        return taskCard; // Return the task card for further verification
    }

    async verifyTaskTags(taskCard, expectedTags) {
        // Using the specific task card that we already verified is in the right column
        for (const tag of expectedTags) {
            const tagElement = taskCard.locator(`span.rounded-full:has-text("${tag}")`);
            await expect(tagElement).toBeVisible();
        }
    }
}

module.exports = ProjectPage; 


