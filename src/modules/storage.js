// src/modules/storage.js
import { mockTasks } from "../data/mockTasks.js";

export function getTasks() {
    const data = localStorage.getItem("tasks");
    if (data) return JSON.parse(data);
    
    // Ila ma-kant ħāja, het l-mock data d-l-bidaya
    localStorage.setItem("tasks", JSON.stringify(mockTasks));
    return mockTasks;
}

export function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}