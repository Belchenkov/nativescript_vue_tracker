import express from 'express';
import * as http from 'http';
import {
    Express,
    Router,
    Request,
    Response
} from 'express';

import { MessageObject } from "./models/domain/message-object.model";

const app: Express = express();
const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    const messageObj: MessageObject = {
        message: "HI there, welcome to NativeScript Vue"
    };

    return res.json(messageObj);
});

router.get('/backlog', (req: Request, res: Response) => {
    return res.json({
        message: "Backlog!!!"
    });
});

app.use('/api', router);

const httpServer = http.createServer(app);
const port = 8080;

httpServer.listen(port, () => {
    console.log(`Server running on http://127.0.0.1:${port}`);
});