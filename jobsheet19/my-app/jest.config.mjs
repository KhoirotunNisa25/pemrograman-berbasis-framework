import nextJest from 'next/jest.js';
import test from 'node:test';

const createJestConfig = nextJest({
    dir: './',
})

const config = {
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
}

export default createJestConfig(config);