import { useState } from 'react';

interface IUseArrayState<TArrayItem> {
  array: Array<TArrayItem>;
  append(item: TArrayItem): void;
  clear(): void;
  insertAtIndex(item: TArrayItem, index: number): void;
  prepend(item: TArrayItem): void;
  removeAtIndex(index: number): TArrayItem | undefined;
  removeFirst(): TArrayItem | undefined;
  removeLast(): TArrayItem | undefined;
  updateAtIndex(item: TArrayItem, index: number): TArrayItem | undefined;
  updateFirst(item: TArrayItem): TArrayItem;
  updateLast(item: TArrayItem): TArrayItem;
  set(items: Array<TArrayItem>): void;
}

/**
 * Manages the state of an array.
 * @param initialValue The initial value for the array
 * @returns The array state
 */
export function useArrayState<TArrayItem>(
  initialValue?: Array<TArrayItem>
): IUseArrayState<TArrayItem> {
  const [array, setArray] = useState<Array<TArrayItem>>(initialValue ?? []);

  return {
    array,
    append(newItem: TArrayItem): TArrayItem {
      setArray(
        (currentArray: Array<TArrayItem>): Array<TArrayItem> => {
          return [...currentArray, newItem];
        }
      );

      return newItem;
    },
    clear(): void {
      setArray([]);
    },
    insertAtIndex(newItem: TArrayItem, index: number): TArrayItem {
      setArray(
        (currentArray: Array<TArrayItem>): Array<TArrayItem> => {
          return [
            ...currentArray.slice(0, index),
            newItem,
            ...currentArray.slice(index),
          ];
        }
      );

      return newItem;
    },
    prepend(newItem: TArrayItem): TArrayItem {
      setArray(
        (currentArray: Array<TArrayItem>): Array<TArrayItem> => {
          return [newItem, ...currentArray];
        }
      );

      return newItem;
    },
    removeAtIndex(index: number): TArrayItem | undefined {
      let indexItem: TArrayItem | undefined = undefined;

      setArray(
        (currentArray: Array<TArrayItem>): Array<TArrayItem> => {
          if (index >= 0 && index < currentArray.length) {
            indexItem = currentArray[index];
            return [
              ...currentArray.slice(0, index),
              ...currentArray.slice(index + 1),
            ];
          }

          return currentArray;
        }
      );

      return indexItem;
    },
    removeFirst(): TArrayItem | undefined {
      let firstItem: TArrayItem | undefined = undefined;

      setArray(
        (currentArray: Array<TArrayItem>): Array<TArrayItem> => {
          if (currentArray.length > 0) {
            firstItem = currentArray[0];
            return currentArray.slice(1);
          }

          return currentArray;
        }
      );

      return firstItem;
    },
    removeLast(): TArrayItem | undefined {
      let lastItem: TArrayItem | undefined = undefined;

      setArray(
        (currentArray: Array<TArrayItem>): Array<TArrayItem> => {
          if (currentArray.length > 0) {
            lastItem = currentArray[currentArray.length - 1];
            return currentArray.slice(0, currentArray.length - 1);
          }

          return currentArray;
        }
      );

      return lastItem;
    },
    updateAtIndex(item: TArrayItem, index: number): TArrayItem | undefined {
      let indexItem: TArrayItem | undefined = undefined;

      setArray(
        (currentArray: Array<TArrayItem>): Array<TArrayItem> => {
          if (index >= 0 && index < currentArray.length) {
            indexItem = currentArray[index];
            return [
              ...currentArray.slice(0, index),
              item,
              ...currentArray.slice(index + 1),
            ];
          }

          return currentArray;
        }
      );

      return indexItem;
    },
    updateFirst(item: TArrayItem): TArrayItem {
      setArray(
        (currentArray: Array<TArrayItem>): Array<TArrayItem> => {
          if (currentArray.length > 0) {
            return [item, ...currentArray.slice(1)];
          }

          return currentArray;
        }
      );

      return item;
    },
    updateLast(item: TArrayItem): TArrayItem {
      setArray(
        (currentArray: Array<TArrayItem>): Array<TArrayItem> => {
          if (currentArray.length > 0) {
            return [...currentArray.slice(0, currentArray.length - 1), item];
          }

          return currentArray;
        }
      );

      return item;
    },
    set(newArray?: Array<TArrayItem>): void {
      setArray(newArray ?? []);
    },
  };
}
