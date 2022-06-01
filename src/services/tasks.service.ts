import { ref, push, set, get, child } from "firebase/database";
import { realTimeDb } from "../config/firebase";
import { TaskItemModel } from "../models/TaskItemModel";

export const useTasksService = () => {
  const adicionarTask = (userId: string, data: TaskItemModel) => {
    // return set(ref(realTimeDb, "tasks/" + userId), data);
    return push(ref(realTimeDb, "tasks/" + userId), data);
  };

  const obterTaskList = (userId: string) => {
    const taskListRef = ref(realTimeDb);
    return get(child(taskListRef, `tasks/${userId}`));
  };

  return { adicionarTask, obterTaskList };
};

//https://firebase.google.com/docs/database/web/read-and-write?authuser=0&hl=pt#web-version-9_1
