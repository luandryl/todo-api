'use strict'
import mongoose from 'mongoose'

const userRestriction = {
	type: mongoose.Schema.Types.ObjectId,
	ref: 'User',
	required: true
}

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
    _user: userRestriction,
    data: taskRestriction,
    status: statusRestriction
})
  
  export default mongoose.model('Todo', todoSchema)