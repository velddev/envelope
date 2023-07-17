import { Box, useTheme } from "@chakra-ui/react";
import { css } from "@emotion/react";
import React from "react";

export type MarkdownProps = {
  content: string;
};

export const Markdown = ({ content }: MarkdownProps) => {
  const theme = useTheme();

  const markdownCss = css`
    table {
      width: 100%;
      margin: 0.5em 0;
      overflow-x: auto;
    }

    tr,
    td,
    th {
      text-align: left;
      padding: 0.25em;
      border: 1px solid var(--${theme.config.cssVarPrefix}-colors-ui-20);
    }

    img {
      border-radius: var(--${theme.config.cssVarPrefix}-radii-md);
    }

    li {
      margin-left: 1.25em;
    }

    h1 {
      font-size: 2.5em;
      margin-top: 0;
      margin-bottom: 0.5em;
    }

    h2 {
      font-size: 2em;
      margin-top: 0;
      margin-bottom: 0.5em;
    }

    h3,
    h4 {
      font-size: 1.5em;
      margin-bottom: 0.5em;
      margin-top: 1em;
    }

    a {
      text-decoration: underline;
      color: var(--${theme.config.cssVarPrefix}-colors-accent);
    }

    p {
      margin-bottom: 0.5em;
    }

    pre {
      margin: 0.5em 0;
      background-color: var(--${theme.config.cssVarPrefix}-colors-ui-5);
      padding: 0.25em 0.5em;
      border-radius: var(--${theme.config.cssVarPrefix}-radii-sm);
      border: 1px solid var(--${theme.config.cssVarPrefix}-colors-ui-10);
      white-space: pre-wrap;
      overflow-wrap: break-word;
      overflow-x: auto;
    }

    img {
      max-width: 100%;
    }
  `;

  return (
    <Box css={markdownCss} wordBreak="break-word" dangerouslySetInnerHTML={{ __html: content }} />
  );
};
