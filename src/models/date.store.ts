import { types } from "mobx-state-tree";

export const DateStore = types
  .model({
    date: types.Date,
  })
  .views((store) => ({
    get date_DMY() {
      let day = store.date.getDate().toString();
      let month = (store.date.getMonth() + 1).toString(); // Los meses comienzan desde 0
      let year = store.date.getFullYear().toString().substr(-2);
      return `${day}/${month}/${year}`;
    },
    get date_YMD() {
      let day = store.date.getDate().toString();
      let month = (store.date.getMonth() + 1).toString(); // Los meses comienzan desde 0
      let year = store.date.getFullYear().toString();
      return `${year}-${month}-${day}`;
    },
  }))
  .actions((store) => ({
    setDate(date: Date) {
      store.date = date;
    },
  }));