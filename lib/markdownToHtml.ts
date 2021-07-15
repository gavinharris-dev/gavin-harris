import showdown from "showdown";

export default function markdownToHtml(markdown: string) {
  const converter = new showdown.Converter({
    simplifiedAutoLink: true,
  });
  converter.setFlavor("github");
  return converter.makeHtml(markdown);
}
