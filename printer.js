const fs = require('fs');

const [, , , strVariables, pathDestiny] = process.argv;

try {
  const variables = JSON.parse(strVariables)[0].variables;

  const filteredVariables = Object.entries(variables)
    .map(([key, value]) => `${key}=${value.value}`)
    .join('\n');

  fs.writeFileSync(pathDestiny, filteredVariables, { encoding: 'utf8' });
  console.log(`Template written to ${pathDestiny}`);
} catch (error) {
  console.error('An error occurred: ', error.message);
}
