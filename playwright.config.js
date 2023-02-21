// test based on screen size

const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    // Option shared for all projects.
    timeout: 30000,
    use: {
        ignoreHTTPSErrors: true,
    },

    // Options specific to each project
    projects: [
        {
            name: 'Desktop Chromium',
            use: {
                browserName: 'chromium',
                //specify the size of device
                viewport: { width: 1280, height: 720},
            },
        },
        {
            name: 'Mobile Chrome',
            use: {
                browserName: 'chromium',
                ...devices['iPhone XR'],
                viewport: { width: 414, height: 896},
            }
        },
        {
            name: 'Tablet Chrome',
            use: {
                browserName: 'chromium',
                ...devices['iPad Air'],
                viewport: { width: 820, height: 1180},
            }
        },
    ]
}

module.exports = config;