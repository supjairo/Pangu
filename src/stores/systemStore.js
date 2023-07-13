import {defineStore} from "pinia";

export const useSystemStore = defineStore('system', () => {
    const system = {
        name: 'Jairo',
        version: '1.0.0',
        description: 'A simple vue3 project'
    }
    const setSystem = (newSystem) => {
        system.name = newSystem.name
        system.version = newSystem.version
        system.description = newSystem.description
    }
    return {system, setSystem}
})
