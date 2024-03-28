function UpdateTaskMiddleware(req, res, next) {
    const { titulo, descricao, prioridade, status } = req.body;
    const validPriorities = ['baixa', 'média', 'alta'];
    const validStatuses = ['aberto', 'em andamento', 'finalizado'];

    try {
        if (titulo === undefined && descricao === undefined && prioridade === undefined && status === undefined) {
            return res.status(400).json({ error: 'Pelo menos um campo deve ser fornecido para atualização' });
        }
        if (prioridade && !validPriorities.includes(prioridade)) {
            return res.status(400).json({ error: 'Prioridade inválida: utilize "baixa", "média" ou "alta"' });
        }
        if (status && !validStatuses.includes(status)) {
            return res.status(400).json({ error: 'Status inválido: utilize "aberto", "em andamento" ou "finalizado"' });
        }
        next();
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao validar os dados para atualização' });
    }
}

export default UpdateTaskMiddleware;