'use strict'
import mongoose from 'mongoose'

const taskRestriction = {
    type: String,
    required: [true, 'No task given'],
    minlength: [3, 'Task too short'],
    maxlength: [100, 'Task too big'],
}

const statusRestriction = {
    type: Boolean,
    required: [true, 'No Status given']
}

const todoSchema = new mongoose.Schema({
    task: taskRestriction,
    status: statusRestriction
  })
  
  export default mongoose.model('Todo', todoSchema)