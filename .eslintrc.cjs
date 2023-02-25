process.env.ESLINT_TSCONFIG = "tsconfig.json";

module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: "@antfu",
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	rules: {},
};
