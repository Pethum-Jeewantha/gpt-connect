import dotenv from 'dotenv';
import path from "path";

dotenv.config({ path: path.join(__dirname, '.env') });

import app from './src/app';
import {port} from "./src/config/constant";

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
