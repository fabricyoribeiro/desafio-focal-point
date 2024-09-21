"use client";

import Image from "next/image";
import page from "../styles/page.module.scss";
import Logo from "../components/Logo";
import { Trash } from "lucide-react";
import Task from "../components/Task";
import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";
import NewTask from "../components/NewTask";
import useTask from "../hooks/useTask";

export default function Home() {
  const [tasks, setTasks] = useState([]);

  const { getAllTasks } = useTask();

  const [reload, setReload] = useState(false);

  useEffect(() => {

    function getTasks(){
      const tasks = getAllTasks();
      setTasks(tasks);
      console.log(tasks);

    }
    getTasks()
  }, [reload]);

  function reloadTasks() {
    // window.location.reload()
    setReload(!reload);
  }

  return (
    <div className={page.page}>
      <main className={page.main}>
        <header className={page.header}>
          <Logo />
          <span>Bem-vindo de volta, Marcus</span>
          <span className={page.date}>Segunda, 01 de dezembro de 2025</span>
        </header>
        <hr />

        <div className={page.tasksContainer}>
          <div>
            <span>Suas tarefas hoje</span>

            {Array.isArray(tasks) &&
              tasks.map(({ id, title, checked }) =>
                !checked && (
                  <Task key={id} id={id} title={title} checked={checked} reloadTasks={reloadTasks} />
                ) 
              )}

            <span>tarefas finalizadas</span>

            {Array.isArray(tasks) &&
              tasks.map(({ id, title, checked }) =>
                checked && (
                  <Task key={id} id={id} title={title} checked={checked} reloadTasks={reloadTasks}/>
                ) 
              )}

          </div>

          <NewTask reloadTasks={reloadTasks} />
        </div>
      </main>
    </div>
  );
}
