module.exports = {
  '*.{md,json}': ['prettier --cache --write'],
  '*.{js,jsx}': ['eslint --fix', 'prettier --cache --write'],
  '*.{css,less}': ['stylelint --fix', 'prettier --cache --write'],
  '*.ts?(x)': ['eslint --fix'],
  '{!(package)*.json,.!(browserslist|npm)*rc}': [
    'prettier --cache --write--parser json',
  ],
  'package.json': ['prettier --cache --write'],
};
