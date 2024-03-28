import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Descriptions, Typography } from 'antd';
import TaskService from '../services/TaskService';
import NotFound from '../components/NotFound';

const { Title } = Typography;

function TaskDetails() {
    const { id } = useParams();
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const isValidId = /^\d+$/.test(id); 

    useEffect(() => {
        async function fetchTask() {
            try {
                if (!isValidId) {
                    throw new Error('ID inválido');
                }

                const fetchedTask = await TaskService.buscarPorId(id);
                setTask(fetchedTask);
            } catch (error) {
                console.error('Erro ao buscar detalhes da tarefa:', error);
            } finally {
                setLoading(false); // Marca a requisição como concluída, independentemente de ter sucesso ou falha
            }
        }

        fetchTask();
    }, [id, isValidId]);

    if (loading) {
        return null; // Ou um spinner de carregamento, se preferir
    }

    if (!task) {
        return <NotFound />;
    }

    return (
        <div>
            <Title level={2}>Detalhes da Tarefa</Title>
            <Descriptions bordered column={1}>
                <Descriptions.Item label="ID da Tarefa">{task.taskId}</Descriptions.Item>
                <Descriptions.Item label="Título">{task.titulo}</Descriptions.Item>
                <Descriptions.Item label="Descrição">{task.descricao}</Descriptions.Item>
                <Descriptions.Item label="Prioridade">{task.prioridade}</Descriptions.Item>
                <Descriptions.Item label="Status">{task.status}</Descriptions.Item>
                <Descriptions.Item label="Data de Criação">{task.createData}</Descriptions.Item>
                <Descriptions.Item label="Data de Finalização">{task.finalData}</Descriptions.Item>
            </Descriptions>
        </div>
    );
}

export default TaskDetails;
