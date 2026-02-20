// src/modules/formular.js
import { saveTasks, getTasks } from "./storage.js"; 
// 1. DAROURI: Import l-validation functions
import { validateTitle, validateScore } from "./validator.js";

export function initFormLogic() {
    const titleInput = document.getElementById("task-title");
    const urgencyInput = document.getElementById("task-urgence");
    const importanceInput = document.getElementById("task-importance");
    const effortInput = document.getElementById("task-effort");
    const addBtn = document.getElementById("add-btn");
    const taskList = document.getElementById("task-list");

    if (addBtn) {
        addBtn.onclick = () => {
            const title = titleInput.value.trim();
            const urgency = urgencyInput.value;
            const importance = importanceInput.value;
            const effort = effortInput.value;

            // 2. Testa l-Titre (Regex: 5-50 chars)
            if (!validateTitle(title)) {
                alert("Titre invalide: entre 5 et 50 caractères, sans caractères spéciaux.");
                return;
            }

            // 3. Testa l-Scores (1-5)
            if (!validateScore(urgency) || !validateScore(importance) || !validateScore(effort)) {
                alert("Les scores doivent être des nombres entre 1 et 5.");
                return;
            }

            const tasks = getTasks(); 
            const newTask = {
                title,
                urgency,
                importance,
                effort
            };

            tasks.push(newTask);
            saveTasks(tasks); 
            
            renderTasks(taskList, tasks); 
            titleInput.value = "";
        };
    }
    
    renderTasks(taskList, getTasks());
}

function renderTasks(container, tasks) {
    if (!container) return;
    container.innerHTML = tasks.map(t => `
        <div class="task-item">
            <h3>${t.title}</h3>
            <p>U: ${t.urgency} | I: ${t.importance} | E: ${t.effort}</p>
        </div>
    `).join('');
}