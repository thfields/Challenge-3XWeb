/* eslint-disable no-useless-catch */
const BASE_URL_TASKS = 'https://tasklist-nodejs.onrender.com/';

const TaskService = {
    listar: async () => {
        try {
            const resposta = await fetch(BASE_URL_TASKS);
            if (!resposta.ok) {
                const errorData = await resposta.json();
                if (errorData.message) {
                    throw new Error(errorData.message); 
                } else {
                    throw errorData; 
                }
            }
            return await resposta.json();
        } catch (erro) {
            throw erro; // Relança o erro capturado
        }
    },

    buscarPorId: async (taskid) => {
        try {
            const resposta = await fetch(`${BASE_URL_TASKS}/${taskid}`);
            if (!resposta.ok) {
                const errorData = await resposta.json();
                if (errorData.message) {
                    throw new Error(errorData.message); // Se houver uma mensagem simples, lança um erro com essa mensagem
                } else {
                    throw errorData; // Se não houver uma mensagem simples, lança o objeto de erro recebido do backend
                }
            }
            return await resposta.json();
        } catch (erro) {
            throw erro; // Relança o erro capturado
        }
    },

    criar: async (task) => {
        try {
            const resposta = await fetch(BASE_URL_TASKS, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            });
            if (!resposta.ok) {
                const errorData = await resposta.json();
                if (errorData.message) {
                    throw new Error(errorData.message); // Se houver uma mensagem simples, lança um erro com essa mensagem
                } else {
                    throw errorData; // Se não houver uma mensagem simples, lança o objeto de erro recebido do backend
                }
            }
            return await resposta.json();
        } catch (erro) {
            throw erro; // Relança o erro capturado
        }
    },

    atualizar: async (taskid, task) => {
        try {
            const resposta = await fetch(`${BASE_URL_TASKS}/${taskid}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            });
            if (!resposta.ok) {
                const errorData = await resposta.json();
                if (errorData.message) {
                    throw new Error(errorData.message); // Se houver uma mensagem simples, lança um erro com essa mensagem
                } else {
                    throw errorData; // Se não houver uma mensagem simples, lança o objeto de erro recebido do backend
                }
            }
            return await resposta.json();
        } catch (erro) {
            throw erro; // Relança o erro capturado
        }
    },

    excluir: async (taskid) => {
        try {
            const resposta = await fetch(`${BASE_URL_TASKS}/${taskid}`, {
                method: 'DELETE'
            });
            const responseData = await resposta.json();
            if (!resposta.ok) {
                throw new Error(responseData.message); // Lança um erro com a mensagem de erro retornada pelo servidor
            }
            return responseData.message; // Retorna a mensagem de sucesso do servidor
        } catch (erro) {
            throw erro;
        }
    }
    
};

export default TaskService;
