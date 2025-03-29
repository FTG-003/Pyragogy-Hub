// Script to serve the static export locally
import StaticServer from 'static-server';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = new StaticServer({
  rootPath: path.join(__dirname, 'static-export'),
  port: 9080
});

server.start(function () {
  console.log(`Server running at http://localhost:${server.port}`);
  console.log('Press Ctrl+C to stop');
});