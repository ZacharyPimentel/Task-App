import express from 'express';
import tenantControllers from './tenant';

const router = express.Router();

const controllers = [
    tenantControllers
]

controllers.forEach((controller) => {
    for (const [_routeMethod, config] of Object.entries(controller)) {
        if(config.httpMethod === 'GET'){
            router.get(config.path, config.function)
        }
        if(config.httpMethod === 'POST'){
            router.post(config.path, config.function)
        }
        if(config.httpMethod === 'PATCH'){
            router.patch(config.path, config.function)
        }
        if(config.httpMethod === 'DELETE'){
            router.delete(config.path, config.function)
        }
    }
})

export default router