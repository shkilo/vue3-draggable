import { DraggableItem } from "../types/draggable-item.interface";
import { getIdGenerator } from "./id-generator";

const draggableItemIdGenrator = getIdGenerator();

export const toDraggableItems = (arr: Array<any>): Array<DraggableItem> => {
  return arr.map((e) => ({
    id: draggableItemIdGenrator(),
    data: e,
  }));
};

export const toOriginalArray = (arr: Array<DraggableItem>): Array<any> => {
  return arr.map((e) => e.data);
};
