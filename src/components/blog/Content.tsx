"use client";
import Markdown from "markdown-to-jsx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark as CodeStyle } from "react-syntax-highlighter/dist/esm/styles/prism";

/**
 * render <code> tag and make sure className is lower case
 * className and children is default property
 * https://www.npmjs.com/package/markdown-to-jsx#syntax-highlighting
 */
function preFunc({
  className,
  children,
}: {
  className: string;
  children: string;
}) {
  return (
    <SyntaxHighlighter
      language={
        className && className.startsWith("lang-")
          ? className.replace("lang-", "").toLowerCase()
          : "text"
      }
      style={CodeStyle}
    >
      {children}
    </SyntaxHighlighter>
  );
}

type Props = {
  content: string;
};

export default function Content({ content }: Props) {
  return (
    <Markdown
      options={{
        overrides: {
          pre: ({ children, ...props }) =>
            "type" in children && children["type"] === "code" ? (
              preFunc(children["props"])
            ) : (
              <pre {...props}>{children}</pre>
            ),
        },
      }}
    >
      {content}
    </Markdown>
  );
}
