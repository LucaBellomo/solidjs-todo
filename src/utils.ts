export const removeIndex = <T>(array: readonly T[], index: number): T[] => {
  return array.filter((item, i) => i !== index);
};

export const toggleProp = <T>(items: T[], prop: keyof T, index: number) => {
  return items.map((t, i) => {
    return index !== i ? t : { ...t, [prop]: !t[prop] };
  });
};
