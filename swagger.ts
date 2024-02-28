import dotenv from 'dotenv';
import path from "path";

dotenv.config({ path: path.join(__dirname, '.env') });

import swaggerAutogen from 'swagger-autogen';
import {port} from "./src/config/constant";

const outputFile = './swagger.json';
const endpointsFiles = ['./src/api/v1/*.ts'];

const config = {
    info: {
        title: 'GPT API Documentation',
        description: '',
    },
    tags: [ ],
    host: `localhost:${port}/api/v1`,
    schemes: ['http', 'https'],
};

swaggerAutogen(outputFile, endpointsFiles, config);
