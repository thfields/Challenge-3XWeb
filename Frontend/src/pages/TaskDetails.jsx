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
        <div className="task-details-container">
            <Title className="task-details-title" level={2} style={{ color: '#fff' }}>Detalhes da Tarefa</Title>
            <Descriptions bordered column={1} >
                <Descriptions.Item label="ID da Tarefa" style={{ color: '#fff' }}>{task.taskId}</Descriptions.Item>
                <Descriptions.Item label="Título" style={{ color: '#fff' }}>{task.titulo}</Descriptions.Item>
                <Descriptions.Item label="Descrição" style={{ color: '#fff' }}>{task.descricao}</Descriptions.Item>
                <Descriptions.Item label="Prioridade" style={{ color: '#fff' }}>{task.prioridade}</Descriptions.Item>
                <Descriptions.Item label="Status" style={{ color: '#fff' }}>{task.status}</Descriptions.Item>
                <Descriptions.Item label="Data de Criação" style={{ color: '#fff' }}>{task.createData}</Descriptions.Item>
                <Descriptions.Item label="Data de Finalização" style={{ color: '#fff' }}>{task.finalData}</Descriptions.Item>
            </Descriptions>
            
        </div>
    );
}

export default TaskDetails;
