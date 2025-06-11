import express from 'express';
import cookieParser from 'cookie-parser';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});