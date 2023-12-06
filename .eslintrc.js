module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            tsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    overrides: [
        {
            files: ['**/*.js', '**/*.ts', '**/*.tsx'],
            rules: {
                'simple-import-sort/imports': [
                    'error',
                    {
                        groups: [
                            // `react` first, `next` second, then packages starting with a character
                            ['^react$', '^next', '^[a-z]'],
                            // Packages starting with `@`
                            ['^@'],
                            // Packages starting with `~`
                            ['^~'],
                            // Imports starting with `../`
                            ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
                            // Imports starting with `./`
                            ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
                            // Style imports
                            ['^.+\\.s?css$'],
                            // Side effect imports
                            ['^\\u0000'],
                        ],
                    },
                ],
            },
        },
    ],
    plugins: [
        'react',
        'simple-import-sort',
    ],
    rules: {
        'no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        'jsx-quotes': ['error', 'prefer-single'],
        indent: ['warn', 4, { SwitchCase: 1 }],
        'max-len': ['error', { code: 180 }],
        'react/jsx-indent': ['error', 4],
        'import/extensions': [0],
        'import/no-unresolved': [0],
        'react/jsx-indent-props': ['error', 4],
        'no-bitwise': [0],
        'react/react-in-jsx-scope': [0],
        'react/function-component-definition': [0],
        'no-nested-ternary': [0],
        'no-tabs': [0],
        'jsx-a11y/label-has-associated-control': [0],
        'default-param-last': [0],
        'import/prefer-default-export': [0],
        'no-shadow': [0],
        'jsx-a11y/click-events-have-key-events': [0],
        'jsx-a11y/no-static-element-interactions': [0],
        'jsx-a11y/no-noninteractive-element-interactions': [0],
        'react/forbid-prop-types': [0],
        'no-underscore-dangle': [0],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/require-default-props': [0],
        'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
        'no-param-reassign': [0],
        'react/jsx-props-no-spreading': [0],
        'react/no-array-index-key': [0],
    },
};
