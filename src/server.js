
import { Env } from './config';
import App from './app.js';
import http from 'http'


const app = new App()

var PORT = Env.PORT ;

const server = http.createServer(app.app);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
});

