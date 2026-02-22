const WORDS_PER_MINUTE = 250;

export const getTimeToRead = (html?: string) => {
  if (!html) {
    return 0;
  }

  const minutes = html.split(" ").length / WORDS_PER_MINUTE;
  return Math.ceil(minutes);
};
