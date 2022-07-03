import { child, get, ref, remove, set } from "firebase/database";
import { realTimeDb } from "../config/firebase";
import { TaskItemModel } from "../models/TaskItemModel";

export const useTasksService = () => {
  const obterTaskList = (userId: string) => {
    return get(child(ref(realTimeDb), `tasks/${userId}`));
  };

  const adicionarTask = (userId: string, data: TaskItemModel) => {
    return set(child(ref(realTimeDb), `tasks/${userId}/${data.id}`), data);
  };

  const removerTask = (userId: string, taskId: string) => {
    return remove(child(ref(realTimeDb), `tasks/${userId}/${taskId}`));
  };

  return { obterTaskList, adicionarTask, removerTask };
};
