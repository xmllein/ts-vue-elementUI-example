module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier", "@vue/typescript"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "quotes": 0,
    "semi": 0,
    "arrow-parens": 0,
	  "prettier/prettier": [
		  "warn",
		  {
			  "#": "prettier config in here :)",
			  "singleQuote": true,
			  "semi": false,
			  "trailingComma": "none"
		  }
	  ]
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
