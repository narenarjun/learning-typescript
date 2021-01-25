import express from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import './controllers/LoginControllers';
import { AppRouter } from './Approuter';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['lkjhgfds'] }));
app.use(router);
app.use(AppRouter.getInstance());
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
