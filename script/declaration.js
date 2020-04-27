const shell = require('shelljs');
const fs = require('fs');
const path = require('path');

const typesPath = path.join(__dirname, '../types');
const typesDirPath = path.join(__dirname, '../');
const typesConfigPath = path.join(__dirname, '../tsconfig.types.json');

const removeJsFile = (pathname) => {
  const files = fs.readdirSync(pathname);
  files.forEach(file => {
    const filePath = path.join(pathname, file);
    const stat = fs.lstatSync(filePath);
    if (stat.isDirectory()) {
      removeJsFile(filePath);
    } else {
      if (/.js$/.test(file)) {
        shell.exec(`rm ${filePath}`);
      }
    }
  });
};

shell.exec(`tsc --project ${typesConfigPath}`);

removeJsFile(typesPath);
