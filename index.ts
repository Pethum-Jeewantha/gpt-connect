import dotenv from 'dotenv';
import path from "path";

dotenv.config({ path: path.join(__dirname, '.env') });

import app from './src/app';

const port = process.env.PORT || 3100;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
