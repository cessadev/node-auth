import { Server } from "./presentation/server";

(() => {
    main();
})()

async function main() {
    // to do: await base de datos
    // to do: inicio del server
    new Server({
        //port: 3001
    })
    .start()
}