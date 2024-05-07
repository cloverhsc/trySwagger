import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import express from 'express';
import cors from 'cors';

const ports = process.env.Port || 3000;
const router = express.Router();

// cors settings
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
};

// create express app
const app = express();

// set cors
app.use(cors(corsOptions));

// set router
app.use('/', router);

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// assign port
app.listen(ports, () => {
  console.log(`Server is listening on port ${ports}`);
});