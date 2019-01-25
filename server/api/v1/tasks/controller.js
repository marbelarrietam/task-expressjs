const dateFns = require('date-fns');

const tasks = [];

const currentDate = dateFns.format(new Date(), 'YYYY-MM-DD');

exports.create = (req, res, next) => {
    if (req.body.description && req.body.author) {
        const task = {
            id: tasks.length + 1,
            description: req.body.description,
            author: req.body.author,
            creation: currentDate,
            update: null,
        };
        tasks.push(task);
        res.status(201);
        res.json({
            message: 'Task created',
        });
        return;
    }
    next({
        message: 'Params are required',
        statusCode: 400,
    });
};

exports.all = (req, res) => {
    res.json(tasks.slice());
};

exports.read = (req, res, next) => {
    const task = tasks.find(t => t.id === +req.params.id);

    if (task) {
        res.json(task);
        return;
    }
    next({
        message: `Task (${req.params.id}) not found`,
        statusCode: 404,
    });
};

exports.update = (req, res, next) => {
    if (req.body.description && req.body.author) {
        const i = tasks.findIndex(t => t.id === +req.params.id);

        if (i >= 0) {
            const task = {
                id: tasks[i].id,
                description: req.body.description,
                author: req.body.author,
                creation: tasks[i].creation,
                update: currentDate,
            };

            tasks.splice(i, 1, task);

            res.json({
                message: `Task ${task.id} updated :)`,
            });
            return;
        }
        next({
            message: 'Task not found :(',
            statusCode: 404,
        });
    }
    next({
        message: 'Params are required',
        statusCode: 400,
    });
};

exports.delete = (req, res, next) => {
    const index = tasks.findIndex(t => t.id === +req.params.id);
    if (index >= 0) {
        tasks.splice(index, 1);
        res.json({
            message: 'Task deleted succesfully!',
        });
        return;
    }
    next({
        message: 'Sorry, Task not found :(',
        statusCode: 404,
    });
};