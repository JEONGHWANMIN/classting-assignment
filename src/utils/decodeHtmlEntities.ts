const htmlEntitiesMapping: { [encodedEntity: string]: string } = {
  "&quot;": '"',
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&apos;": "'",
  "&nbsp;": " ",
  "&#039;": "'",
};

export const decodeHtmlEntities = (text: string): string => {
  return text.replace(/(&(quot|amp|lt|gt|apos|nbsp|#039);)/g, (match, entity) => {
    console.log("Encoded Entity:", match);
    console.log("Decoded Character:", entity);
    return htmlEntitiesMapping[entity] || match;
  });
};
