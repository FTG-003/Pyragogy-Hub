// Script to export the website as static files
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Ensure dist directory exists
const distDir = path.join(__dirname, 'static-export');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Build the project
console.log('Building the project...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build completed successfully.');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}

// Create additional static files
console.log('Creating static export files...');

// Create index.html in static-export directory that will load the built assets
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pyragogy - The Future of Learning</title>
  <meta name="description" content="Pyragogy represents a paradigm shift in education, where humans and AI collaborate to create unprecedented learning experiences.">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@400;500;600;700;800&family=Space+Mono&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Import the built CSS -->
  <link rel="stylesheet" href="./assets/index.css">
</head>
<body>
  <div id="root"></div>
  
  <!-- Import the built JS -->
  <script type="module" src="./assets/index.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml);

// Copy dist files to static-export/assets
const distPublicDir = path.join(__dirname, 'dist/public');
const assetsDir = path.join(distDir, 'assets');

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Helper function to copy directory contents recursively
function copyDirRecursive(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  entries.forEach(entry => {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// Copy assets from dist/public to static-export/assets
copyDirRecursive(distPublicDir, assetsDir);

console.log(`
Static export completed successfully!
Files are available in the 'static-export' directory.

To test the static site locally, run:
npx static-server static-export

You can upload the contents of the 'static-export' directory to any static hosting service like GitHub Pages.
`);