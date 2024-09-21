"use client"; 

import { Check, Trash } from "lucide-react";

import task from '../styles/task.module.scss'
import { useState } from "react";
import DeleteTask from "./DeleteTask";
import useTask from "../hooks/useTask";

export default function Task({ title, id, checked, reloadTasks }) {
  const [isChecked, setIsChecked] = useState(false)

  const {toggleTaskChecked} = useTask()

  function check(id){
    toggleTaskChecked(id)
    reloadTasks()
    setIsChecked(true)
  }

  return (
    <div className={task.task}>
      <div onClick={()=> {check(id)}}>

          {isChecked || checked ? (
            <div className={task.checked}>
              <Check size={20} color="blue" />

            </div>
          ) : (
            <div className={task.check}>
            </div>
          )}

          {
            checked ? (
              <del>{title}</del>
            ) : (

              <span>{title}</span>
            )
          }
        
      </div>
      <DeleteTask id={id} reloadTasks={reloadTasks} />
    </div>
  );
}
