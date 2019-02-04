'use strict';
import Todo from './schema/Todo';
import BaseModel from './Base.Model'

export default class TodoModel extends BaseModel {

  constructor(data) {
    super(Todo, '_id', data)
  }
}