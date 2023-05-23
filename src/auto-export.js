const fs = require('fs');

function scanDirectory(directoryPath) {
  const files = fs.readdirSync(directoryPath);

  const exportStatements = files
    .filter(file => file !== 'index.ts' && file.endsWith('.ts'))
    .map(file => {
      const fileName = file.replace('.ts', '');
      return `export * from './${fileName}';`;
    })
    .join('\n');

  const indexPath = `${directoryPath}/index.ts`;
  const indexContent = `${exportStatements}\n`;

  fs.writeFileSync(indexPath, indexContent);
}

scanDirectory('./src/app/services'); // Update the directory path as per your project structure
