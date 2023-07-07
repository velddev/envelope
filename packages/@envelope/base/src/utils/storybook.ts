import { Meta } from "@storybook/react";

export enum MetaType {
  Component = "Components",
}

export interface CreateMetaProps extends Omit<Meta, "title"> {
  type: MetaType;
  name: string;
  description?: string;
  hideGuidelines?: boolean;
}

export const createMeta = ({
  name,
  type,
  description,
  hideGuidelines,
  ...meta
}: CreateMetaProps): Meta => ({
  title: `${type}/${name}`,
  loaders: [
    ...(meta.loaders || []),
    async (context) => {
      // Custom loader to append a description for stories.
      context.description = description;
      context.hideGuidelines = hideGuidelines;
      return context;
    },
  ],
  ...meta,
});
