import { useState, useEffect } from 'react';

export default function useTask() {

  // Função para criar uma nova tarefa
  function createTask(title) {
    const newTask = {
      id: Date.now(),
      title,
      checked: false,
    };
    const tasks = getAllTasks()
    tasks.push(newTask)
    localStorage.setItem('@tasks', JSON.stringify(tasks))
    return true
  }

  // Função para deletar uma tarefa existente
  function removeTask(id) {
    console.log("ii", id)
    const tasks = getAllTasks()
    const updatedTasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('@tasks', JSON.stringify(updatedTasks))
    console.log("up", updatedTasks)
    return true
  }

  // Função para buscar todas as tarefas
  function getAllTasks() {
    const savedTasks = localStorage.getItem('@tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];

  }

  // Função para alternar o status 'checked' de uma tarefa
  function toggleTaskChecked(id) {
    const tasks = getAllTasks()

    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    localStorage.setItem('@tasks', JSON.stringify(updatedTasks));
  }

  return {
    createTask,
    removeTask,
    getAllTasks,
    toggleTaskChecked,
  };
}
