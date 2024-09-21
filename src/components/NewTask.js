"use client";
import * as Dialog from "@radix-ui/react-dialog";
import newTask from "../styles/newtask.module.scss";
import { useState } from "react";
import useTask from "../hooks/useTask";

export default function NewTask({reloadTasks}) {
  const [taskTitle, setTaskTitle] = useState("");

  const { createTask } = useTask();

  const handleAddTask = () => {
    createTask(taskTitle);
    reloadTasks();
    setTaskTitle("");
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={newTask.newTaskButton}>
          Adicionar nova tarefa
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={newTask.dialogOverlay} />
        <Dialog.Content className={newTask.dialogContent}>

          <div>
            <Dialog.Title className={newTask.dialogTitle}>
              Nova Tarefa
            </Dialog.Title>
            <div>
              <label htmlFor="Titulo">Titulo</label>
              <input
                type="text"
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
                placeholder="Digite"
                className={newTask.inputTask}
              />
            </div>

            <div className={newTask.dialogButtons}>
              <Dialog.Close asChild>
                <button className={newTask.dialogCancelButton}>Cancelar</button>
              </Dialog.Close>
              <Dialog.Close asChild>
                <button onClick={handleAddTask}>Adicionar</button>
              </Dialog.Close>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
