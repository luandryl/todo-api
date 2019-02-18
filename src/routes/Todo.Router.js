import express from 'express'

import TodoController from '../controllers/Todo.Controller'

let router = express.Router()

let todo = new TodoController()

import passport from 'passport'
const protect = passport.authenticate('jwt', {
	session: false
})


router.get('/', protect, (req, res) => {
    todo.getAll(req, res);
})

router.post('/', protect, (req, res) => {
    todo.save(req, res)
})

router.get('/:id', protect, (req, res) => {
    todo.getById(req, res)
})
 
router.put('/:_id', protect, (req, res) => {
    todo.updateById(req, res)
})

router.get('/task_list/:_user', protect, (req, res) => {
    todo.byUser(req, res)
})

router.delete('/:id', protect, (req, res) => {
    todo.removeById(req, res)
})

export default router