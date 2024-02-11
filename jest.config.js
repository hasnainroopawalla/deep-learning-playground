module.exports = {
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    collectCoverage: false,
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}",
        "!<rootDir>/node_modules/"
    ],
    coverageThreshold: {
        global: {
            "lines": 0,
            "statements": 0
        }
    },
};