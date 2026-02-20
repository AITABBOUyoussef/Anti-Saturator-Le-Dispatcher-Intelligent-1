// src/modules/ui.js
export const headerfunc = () => `<header class="app-header">Anti-Saturator</header>`;

export const formulair = () => {
    return `
    <div class="div">
        <h1>Ajouter Une Tache</h1>
        <label>Titre :</label>
        <input type="text" placeholder="Entrer votre Tache ....." id="task-title" />
        <label>Urgence :</label>
        <input type="range" min="1" max="5" value="5" id="task-urgence" />
        <label>Importance (1-5):</label>
        <input type="range" min="1" max="5" value="5" id="task-importance" />
        <label>Effort (1-5):</label>
        <input type="range" min="1" max="5" value="5" id="task-effort" />
        ${button}
        <div id="task-list" class="task-list-container"></div>
    </div>
    `;
}

export const button =  `<div><button id="add-btn">Ajouter</button></div>`;
export const supprimer = () => `<div><button id="clear-btn">Supprimer</button></div>`;