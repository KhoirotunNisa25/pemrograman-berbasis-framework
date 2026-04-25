import nextJest from 'next/jest.js';
import test from 'node:test';

const createJestConfig = nextJest({
    dir: './',
})

const config = {
    testEnvironment: 'jsdom',
    moduleDirectories: ['node_modules', '<rootDir>/'],
    setupFilesAfterEnv: ['<rootDir>/src/__test__/setup.ts'],
    collectCoverage: true,
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/**/*.d.ts',
        '!src/pages/api/**',
        '!src/**/__test__/**',
        '!src/**/*.spec.{ts,tsx}',
        '!src/**/__snapshots__/**'
    ]
}

export default createJestConfig(config);