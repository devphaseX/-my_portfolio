const mergeClass = (...classNames: string[]) =>
  classNames
    .map((name) => name.trim())
    .join(' ')
    .trim();

export { mergeClass };
