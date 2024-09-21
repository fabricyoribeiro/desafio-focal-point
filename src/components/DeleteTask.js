"use client";
import * as Dialog from "@radix-ui/react-dialog";
import deleteTask from "../styles/deletetask.module.scss";
import { useState } from "react";
import { Trash } from "lucide-react";
import useTask from "../hooks/useTask";

export default function DeleteTask({ id, reloadTasks }) {
  
  const { removeTask } = useTask();

  const handleDeleteTask = () => {
    removeTask(id);
    reloadTasks();
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Trash size={24} color="#B0BBD1" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={deleteTask.dialogOverlay} />
        <Dialog.Content
          className={deleteTask.dialogContent}
        >

          <div>
            <Dialog.Title className={deleteTask.dialogTitle}>
              Deletar Tarefa
            </Dialog.Title>
            <div>
              <label htmlFor="Titulo">
                Tem certeza que você deseja deletar essa tarefa?
              </label>
            </div>

            <div className={deleteTask.dialogButtons}>
              <Dialog.Close asChild>
                <button className={deleteTask.dialogCancelButton}>
                  Cancelar
                </button>
              </Dialog.Close>
              <button onClick={handleDeleteTask}>Deletar</button>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
