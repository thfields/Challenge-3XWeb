/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Button, Form, Input, Modal, Select } from "antd";
import TaskService from "../services/TaskService";

const TaskModal = ({ abrirModal, setAbrirModal, buscarTasks, task, isEditing, onEditSuccess, onCreateSuccess }) => {

    const [form] = Form.useForm();

    useEffect(() => {
        if (isEditing && task) {
            form.setFieldsValue({
                titulo: task.titulo,
                descricao: task.descricao,
                prioridade: task.prioridade,
                status: task.status
            });
        } else {
            form.resetFields();
        }
    }, [isEditing, task, form]);

    const salvarTask = async () => {
        try {
            const values = await form.validateFields();
            if (isEditing) {
                await TaskService.atualizar(task.taskId, values);
                onEditSuccess();
            } else {
                await TaskService.criar(values);
                onCreateSuccess();
            }
            setAbrirModal(false);
            form.resetFields();
            buscarTasks();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Modal
            title={isEditing ? "Editar Tarefa" : "Nova Tarefa"}
            visible={abrirModal}
            onOk={() => {
                setAbrirModal(false);
                form.resetFields();
            }}
            onCancel={() => {
                setAbrirModal(false);
                form.resetFields();
            }}
            footer={(
                <>
                    <Button onClick={() => {
                        setAbrirModal(false);
                        form.resetFields();
                    }}>Cancelar</Button>
                    <Button onClick={salvarTask} type="primary">{isEditing ? "Atualizar" : "Cadastrar"}</Button>
                </>
            )}>

            <Form form={form} layout="vertical" name="taskForm">
                <Form.Item
                    name="titulo"
                    label="Título da tarefa"
                    rules={[{ required: true, message: "Por favor, insira o título da tarefa" }]}>
                    <Input placeholder="Digite o título da tarefa" />
                </Form.Item>

                <Form.Item
                    name="descricao"
                    label="Descrição da tarefa"
                    rules={[{ required: true, message: "Por favor, insira a descrição da tarefa" }]}>
                    <Input placeholder="Digite a descrição da tarefa" />
                </Form.Item>

                <Form.Item
                    name="prioridade"
                    label="Prioridade da tarefa">
                    <Select placeholder="Selecione a prioridade da tarefa">
                        <Select.Option value="baixa">Baixa</Select.Option>
                        <Select.Option value="média">Média</Select.Option>
                        <Select.Option value="alta">Alta</Select.Option>
                    </Select>
                </Form.Item>

                {isEditing && (
                    <Form.Item
                        name="status"
                        label="Status da tarefa">
                        <Select placeholder="Selecione o status da tarefa">
                            <Select.Option value="aberto">Aberto</Select.Option>
                            <Select.Option value="em andamento">Em Andamento</Select.Option>
                            <Select.Option value="finalizado">Finalizado</Select.Option>
                        </Select>
                    </Form.Item>
                )}
            </Form>
        </Modal>
    );
}

export default TaskModal;
