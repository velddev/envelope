import { Wrap } from "@chakra-ui/layout";
import { ComponentWithAs, IconProps } from "@chakra-ui/react";
import React from "react";
import { StarIcon } from "../../icons";

export type RatingInputProps = {
  numberOfItems: number;
  value?: number;
  icon?: ComponentWithAs<"svg", IconProps>;
  isReadOnly?: boolean;
  onChange?: (value: number) => void;
};

type ItemProps = {
  icon: ComponentWithAs<"svg", IconProps>;
  isActive: boolean;
  isReadOnly: boolean;
  onSelect: () => void;
};

const RatingItem = ({ isActive, isReadOnly, onSelect, icon, ...rest }: ItemProps) => {
  const Icon = icon;

  return (
    <Icon
      boxSize="5"
      cursor={isReadOnly ? "default" : "pointer"}
      fill={isActive ? "accent.100" : "ui.10"}
      _hover={
        isReadOnly
          ? undefined
          : {
              fill: "accent.60",
            }
      }
      transition="0.2s all"
      {...rest}
      onClick={isReadOnly ? () => {} : onSelect}
    />
  );
};

export const RatingInput = ({ numberOfItems, value, icon, ...props }: RatingInputProps) => {
  icon ??= StarIcon;

  return (
    <Wrap spacing="2">
      {[...Array(numberOfItems)].map((_, i) => (
        <RatingItem
          key={i}
          icon={icon}
          isActive={(value ?? -1) >= i}
          isReadOnly={props.isReadOnly}
          onSelect={() => {
            if (props.isReadOnly === true) {
              return;
            }

            if (props.onChange) {
              props.onChange(i);
            }
          }}
        />
      ))}
    </Wrap>
  );
};
