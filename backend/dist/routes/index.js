"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setRoutes(app) {
    const indexController = new IndexController();
    app.get('/', indexController.getIndex.bind(indexController));
}
exports.default = setRoutes;
