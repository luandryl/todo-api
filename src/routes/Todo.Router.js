import express from 'express'

import TodoController from '../controllers/Todo.Controller'

let router = express.Router()

let todo = new TodoController()



router.get('/', (req, res) => {
    todo.getAll(req, res);
})

router.post('/', (req, res) => {
    todo.save(req, res)
})

router.get('/:id', (req, res) => {
    todo.getById(req, res)
})
 
router.put('/:_id', (req, res) => {
    todo.updateById(req, res)
})

router.delete('/:id', (req, res) => {
    todo.removeById(req, res)
})

export default router