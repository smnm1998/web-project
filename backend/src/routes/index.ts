import { Application } from 'express';
import IndexController from '../controllers/index';

export const setRoutes = (app: Application) => {
    const indexController = new IndexController();

    app.get('/', indexController.getIndex.bind(indexController));
};

export default setRoutes;