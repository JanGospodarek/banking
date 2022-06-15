import { View } from "./View";
import * as markups from "./markups.js";

class History extends View {
  parentElement = document.querySelector(".historyList");
  generateMarkup() {
    let markup = "";
    this.data.forEach((entry) => {
      markup += markups.historyMarkup(entry);
    });

    return markup;
  }
}
export const history = new History();
