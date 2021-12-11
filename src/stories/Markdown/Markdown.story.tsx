import React from "react";
import {createMeta, MetaType} from "../../utils/storybook";
import {Markdown} from "../../components";
import {MarkdownProps} from "../../components/Markdown";

export default createMeta({
  type: MetaType.Component,
  name: "Markdown",
  description: "An extendable Box component that renders markdown into HTML.",
  component: Markdown,
  argTypes: {
    content: {
      type: "string"
    }
  },
  args: {
    content: "<h1>Hello World!</h1><hr/><br/><p>Some more stuff here perhaps!</p>"
  } as MarkdownProps
});

export const _Markdown = ({ content }: MarkdownProps) => <Markdown content={content} />;
