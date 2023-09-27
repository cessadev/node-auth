import { Server } from "./presentation/server";
import { config } from "dotenv";

config();

(async () => {
    main();
})();

async function main() {
    // to do: await base de datos
    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
    // to do: inicio del server
    new Server({
        port : port,
    })
    .start();
}