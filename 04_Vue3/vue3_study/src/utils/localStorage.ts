import { Todo } from "@/type/todo";

export function saveTodos(value: Todo[]) {
  localStorage.setItem('todos_key', JSON.stringify(value))
}

export function readTodos(): Todo[] {
  return JSON.parse(localStorage.getItem('todos_key') || '[]')
}