/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ['src/**/*.{ts,tsx}'],
	coverageDirectory: 'coverage',
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	transform: {
		'^.+\\.js[x]?$': 'babel-jest'
	},
	moduleDirectories: ['node_modules', '<rootdir>/src']
};
