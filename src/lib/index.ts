const mergeClass = (...classNames: (string | undefined)[]) =>
  classNames
    .map((name) => name && name.trim())
    .join(' ')
    .trim();

export { mergeClass };
