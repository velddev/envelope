import React from "react";
import { Markdown } from "../..";
import { MarkdownProps } from "..";

export default {
  name: "Markdown",
  description: "An extendable Box component that renders markdown into HTML.",
  component: Markdown,
  argTypes: {
    content: {
      type: "string",
    },
  },
  args: {
    content: "<h1>Hello World!</h1><hr/><br/><p>Some more stuff here perhaps!</p>",
  } as MarkdownProps,
};

export const _Markdown = ({ content }: MarkdownProps) => <Markdown content={content} />;
