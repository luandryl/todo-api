import BaseController from './Base.Controller'
import TodoModel from './../models/Todo.Model'

export default class TodoController extends BaseController {
    constructor() {
        super(TodoModel)
    }
}