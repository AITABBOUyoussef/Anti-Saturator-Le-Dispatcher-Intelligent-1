// src/app.js
import { getTasks } from "./modules/storage.js"; // ISLAH: Zid /modules/
import { headerfunc, formulair, button, supprimer } from "./modules/ui.js"; // ISLAH: Zid /modules/
import { initFormLogic } from "./modules/formular.js"; // Path s-hih

const main = document.querySelector(".main");

if (main) {
    // 1. Rsem l-HTML f-l-lowel
    main.innerHTML = `
        ${headerfunc()}
        ${formulair()}
       
        ${supprimer()}
    `;

    // 2. DABA 3AD khddem l-logic (Mnin les elements wellaw moujoudin)
    initFormLogic();
}