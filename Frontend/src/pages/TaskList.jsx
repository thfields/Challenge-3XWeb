import { useState, useEffect } from "react";
import { DeleteTwoTone, EditTwoTone, EyeOutlined } from "@ant-design/icons";
import { Button, Modal, Table, Space, message } from "antd";
import Title from "antd/lib/typography/Title";
import TaskService from "../services/TaskService";
import TaskModal from "./TaskModal";
import { useNavigate } from "react-router-dom";

function ListTask() {
    const [tasks, setTasks] = useState([]);
    const [abrirModal, setAbrirModal] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);
    const navigate = useNavigate();

    useEffect(() => { 
        buscarTasks(); 
    }, []);

    const buscarTasks = async () => {
        try {
            const tasks = await TaskService.listar();
            setTasks(tasks);
        } catch (error) {
            console.error("Erro ao buscar tasks", error);
        }
    };

    const editar = (registro) => {
        setTaskToEdit(registro);
        setAbrirModal(true);
    };

    const excluir = (taskId) => {
        Modal.confirm({
            title: "Deseja realmente excluir a tarefa?",
            content: "Você vai apagar a tarefa definitivamente!",
            okText: "Excluir",
            okType: "danger",
            cancelText: "Cancelar",
            onOk() {
                TaskService.excluir(taskId)
                    .then(() => {
                        buscarTasks();
                        message.success("Tarefa excluída com sucesso!"); 
                    })
                    .catch(error => {
                        console.error("Erro ao excluir a tarefa:", error);
                        message.error("Tarefa não finalizada, tente novamente!"); 
                    });
            },
            onCancel() {
                console.log("Cancelado");
            }
        });
    };

    const columns = [
        { title: "ID da Tarefa", dataIndex: "taskId", key: "taskId" },
        { title: "Título", dataIndex: "titulo", key: "titulo" },
        { title: "Descrição", dataIndex: "descricao", key: "descricao" },
        { title: "Prioridade", dataIndex: "prioridade", key: "prioridade" },
        { title: "Status", dataIndex: "status", key: "status" },
        { title: "Data de Criação", dataIndex: "createData", key: "createData" },
        { title: "Data de Finalização", dataIndex: "finalData", key: "finalData" },
        {
            title: "Ações", dataIndex: "taskId", key: "actions", render: (text, record) => (
                <Space size="middle">
                    <Button onClick={() => navigate(`/tasks/${record.taskId}`)}><EyeOutlined /></Button>
                    <Button onClick={() => editar(record)}><EditTwoTone /></Button>
                    <Button danger onClick={() => excluir(record.taskId)}><DeleteTwoTone /></Button>
                </Space>
            )
        },
    ];

    return (
        <>
            <Title level={2}>Tarefas</Title>
            <Space style={{ marginBottom: 10 }} direction="vertical">
                <Button type="primary" onClick={() => { setAbrirModal(true); setTaskToEdit(null); }}>Nova Tarefa</Button>
                <Table dataSource={tasks} columns={columns} />
            </Space>
            <TaskModal 
                abrirModal={abrirModal} 
                setAbrirModal={setAbrirModal} 
                buscarTasks={buscarTasks} 
                task={taskToEdit} 
                isEditing={!!taskToEdit}
                onEditSuccess={() => message.success("Tarefa editada com sucesso!")}
                onCreateSuccess={() => message.success("Tarefa criada com sucesso!")}
            />
        </>
    );
}

export default ListTask;
