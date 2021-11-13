import { makeAutoObservable } from "mobx";
import api from "./api";

class CateStore {
  categories = [];

  constructor() {
    makeAutoObservable(this);
  }

  fetchCategory = async () => {
    try {
      const res = await api.get("/category");
      this.categories = res.data;
    } catch (error) {
      console.error("catetStore -> fetchcategory -> error", error);
    }
  };

  createCategory = async (newCategory) => {
    try {
      const formData = new FormData();
      for (const key in newCategory) formData.append(key, newCategory[key]);
      const res = await api.post("/category", formData);
      this.categories.push(res.data);
      // const response = await api.post("/category", category);
      // this.categories.push(res.data);
    } catch (error) {
      console.log("catetStore -> createcategory -> error", error);
    }
  };
}
const cateStore = new CateStore();
cateStore.fetchCategory();
export default cateStore;
