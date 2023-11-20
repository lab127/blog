export function createSlug(slug: string) {
  const slugArr = slug.split("-");
  const regexDate = /\d{4}-\d{2}-\d{2}-/i;
  const slugStr = slug.replace(regexDate, "");
  const slugDate = slugArr.slice(0, 3).join("/");
  return `${slugDate}/${slugStr}`;
}
