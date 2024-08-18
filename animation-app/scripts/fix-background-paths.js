const fs = require('fs');
const path = require('path');

const cssDirPath = path.join(__dirname, '../out/_next/static/css');
const repoName = 'parallax-sample-next';

// 修正する関数
const fixBackgroundPaths = (cssContent) => {
  return cssContent.replace(/url\(\//g, `url(/${repoName}/`);
};

// ディレクトリ内のすべてのCSSファイルを取得
fs.readdir(cssDirPath, (err, files) => {
  if (err) {
    console.error('Error reading CSS directory:', err);
    return;
  }

  // CSSファイルごとに修正を適用
  files.forEach((file) => {
    const filePath = path.join(cssDirPath, file);
    if (path.extname(file) === '.css') {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          console.error(`Error reading CSS file ${file}:`, err);
          return;
        }
        const fixedData = fixBackgroundPaths(data);
        fs.writeFile(filePath, fixedData, 'utf8', (err) => {
          if (err) {
            console.error(`Error writing CSS file ${file}:`, err);
          } else {
            console.log(`CSS file ${file} paths fixed.`);
          }
        });
      });
    }
  });
});