export const truncate = (text: string, maxChars: number = 100) => {
  if (!text) return "";
  if (text.length <= maxChars) return text;
  return text.slice(0, maxChars).trim() + "...";
};

