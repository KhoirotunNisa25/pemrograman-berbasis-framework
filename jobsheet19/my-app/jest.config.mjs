import nextJest from 'next/jest.js';
import test from 'node:test';

const createJestConfig = nextJest({
    dir: './',
})

const config = {
    testEnvironment: 'jsdom',
     modulePath: ['<rootDir>/src/'],
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{ts,tsx}',
        '**/*.d.ts',
        '!**/node_modules/**',
        '!**/.next/**',
        '!**/coverage/**',
        '!**/jest.config.mjs',
        '!**/next.config.mjs',
        '!**/types/**',
        '!**/views/**',
        '!**/pages/api/**'
    ]
}

export default createJestConfig(config);