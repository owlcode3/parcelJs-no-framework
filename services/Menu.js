import data from "../data/menu.json";

export async function loadData() {
   app.store.menu = data;
}

export async function getProductById(id) {
   if (app.store.menu == null) {
      await loadData();
   }
   for (let c of app.store.menu) {
      for (let p of c.products) {
         if (p.id == id) {
            return p;
         }
      }
   }
   return null;
}
