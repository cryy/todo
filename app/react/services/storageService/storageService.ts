import Store from "./models/Store";
import TaskFilter from "../stateService/models/TaskFilter";

let storeCache: Store | null = null;

export function load() {
  if (storeCache)
    return storeCache;

  const storeJSON = window.localStorage.getItem("store");

  if (storeJSON && typeof storeJSON === 'string')
    storeCache = JSON.parse(storeJSON) as Store;
  else
    storeCache = {
      tasks: [],
      filter: TaskFilter.All
    };

  return storeCache;
}

export function save(store: Store) {
  storeCache = store;
  window.localStorage.setItem("store", JSON.stringify(store));
}