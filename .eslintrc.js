module.exports = {
  root: true,
  extends: ['react-app', 'react-app/jest', 'plugin:prettier/recommended'],
  overrides: [
    {
      files: ['**/*.@(story|stories).*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
};
