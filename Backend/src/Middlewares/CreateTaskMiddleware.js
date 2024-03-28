function CreateTaskMiddleware(req, res, next) {
    let { titulo, descricao, prioridade, status } = req.body;
    const validPriorities = ['baixa', 'média', 'alta'];
    const validStatuses = ['aberto'];

    // Definindo valores padrão
    prioridade = prioridade || 'baixa';
    status = status || 'aberto';

    try {
        if (!titulo || !descricao) {
            return res.status(400).json({ error: 'Titulo e descrição são campos obrigatórios' });
        }
        if (!validPriorities.includes(prioridade)) {
            return res.status(400).json({ error: 'Prioridade inválida: utilize "baixa", "média" ou "alta"' });
        }
        if (!validStatuses.includes(status)) {
            return res.status(400).json({ error: 'Status inválido: utilize "aberto"' });
        }
        
        req.body.prioridade = prioridade;
        req.body.status = status;
        next();
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao criar a task' });
    }
}

export default CreateTaskMiddleware;