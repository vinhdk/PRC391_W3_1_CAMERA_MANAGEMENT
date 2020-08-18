import { App } from "src/app/app.express";
import { Context } from "src/app/extras/contexts";
(async () => {
    const context: Context = new Context();
    await context.connection();
    const app = new App(context.sequelize);
    await app.listen();
})();
