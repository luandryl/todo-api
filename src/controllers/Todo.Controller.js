import BaseController from './Base.Controller'
import TodoModel from './../models/Todo.Model'

export default class TodoController extends BaseController {
    constructor() {
        super(TodoModel)
    }

    byUser (req, res) {
        let query = {
            _user: req.params._user
        }
        new TodoModel().getByField(query).then((data) => {
            console.log(data)
            if(data) {
                res.send(data);
                res.status(200)
                res.end()
            }
        }).catch(err => {
            res.json(err);
            res.status(400);
            res.end();
        })
    }
}