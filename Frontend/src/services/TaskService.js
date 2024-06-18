import axios from 'axios';

const BASE_URL_TASKS = 'https://tasklist-back-9ipj8a3p7-thiago-campos-projects.vercel.app/tasks';

const TaskService = {
    listar: async () => {
        try {
            const resposta = await axios.get(BASE_URL_TASKS);
            return resposta.data;
        } catch (error) {
            handleErrorResponse(error);
        }
    },

    buscarPorId: async (taskid) => {
        try {
            const resposta = await axios.get(`${BASE_URL_TASKS}/${taskid}`);
            return resposta.data;
        } catch (error) {
            handleErrorResponse(error);
        }
    },

    criar: async (task) => {
        try {
            const resposta = await axios.post(BASE_URL_TASKS, task);
            return resposta.data;
        } catch (error) {
            handleErrorResponse(error);
        }
    },

    atualizar: async (taskid, task) => {
        try {
            const resposta = await axios.put(`${BASE_URL_TASKS}/${taskid}`, task);
            return resposta.data;
        } catch (error) {
            handleErrorResponse(error);
        }
    },

    excluir: async (taskid) => {
        try {
            const resposta = await axios.delete(`${BASE_URL_TASKS}/${taskid}`);
            return resposta.data.message;
        } catch (error) {
            handleErrorResponse(error);
        }
    }
};

function handleErrorResponse(error) {
    if (error.response) {
        // O servidor retornou um código de status fora do intervalo 2xx
        throw new Error(error.response.data.message || error.response.statusText);
    } else if (error.request) {
        // A requisição foi feita, mas não houve resposta
        throw new Error('Não foi possível receber resposta do servidor.');
    } else {
        // Ocorreu um erro ao configurar a requisição
        throw new Error('Erro ao enviar requisição.');
    }
}

export default TaskService;
