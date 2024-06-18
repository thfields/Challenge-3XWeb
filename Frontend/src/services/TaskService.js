const BASE_URL_TASKS = 'https://tasklist-back.vercel.app/tasks';

const TaskService = {
    listar: async () => {
        const resposta = await fetch(BASE_URL_TASKS, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors', // Mantém o modo CORS
        });
        if (!resposta.ok) {
            const errorData = await resposta.json();
            if (errorData.message) {
                throw new Error(errorData.message); 
            } else {
                throw errorData; 
            }
        }
        return await resposta.json();
    },

    buscarPorId: async (taskid) => {
        const resposta = await fetch(`${BASE_URL_TASKS}/${taskid}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'cors', // Mantém o modo CORS
        });
        if (!resposta.ok) {
            const errorData = await resposta.json();
            if (errorData.message) {
                throw new Error(errorData.message); 
            } else {
                throw errorData; 
            }
        }
        return await resposta.json();
    },

    criar: async (task) => {
        const resposta = await fetch(BASE_URL_TASKS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task),
            mode: 'cors', // Mantém o modo CORS
        });
        if (!resposta.ok) {
            const errorData = await resposta.json();
            if (errorData.message) {
                throw new Error(errorData.message); 
            } else {
                throw errorData; 
            }
        }
        return await resposta.json();
    },

    atualizar: async (taskid, task) => {
        const resposta = await fetch(`${BASE_URL_TASKS}/${taskid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task),
            mode: 'cors', // Mantém o modo CORS
        });
        if (!resposta.ok) {
            const errorData = await resposta.json();
            if (errorData.message) {
                throw new Error(errorData.message); 
            } else {
                throw errorData; 
            }
        }
        return await resposta.json();
    },

    excluir: async (taskid) => {
        const resposta = await fetch(`${BASE_URL_TASKS}/${taskid}`, {
            method: 'DELETE',
            mode: 'cors', // Mantém o modo CORS
        });
        const responseData = await resposta.json();
        if (!resposta.ok) {
            throw new Error(responseData.message); 
        }
        return responseData.message; 
    }
};

export default TaskService;
