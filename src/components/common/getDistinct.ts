export const unique = (array: object[], property: string) => {
    return [...Array.from(new Set(array.map((item: any) => item[property])))];
  };