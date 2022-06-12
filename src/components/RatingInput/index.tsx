import { Wrap } from "@chakra-ui/layout";
import React from "react";
import { StarIcon } from "../../icons";

type Props = {
  numberOfItems: number;
  value?: number;
} & (
  | {
      isReadOnly?: false;
      onChange: (value: number) => void;
    }
  | {
      isReadOnly: true;
    }
);

type ItemProps = {
  isActive: boolean;
  isReadOnly: boolean;
  onSelect: () => void;
};

const RatingItem = ({ isActive, isReadOnly, onSelect, ...rest }: ItemProps) => {
  return (
    <StarIcon
      boxSize="5"
      fill={isActive ? "accent.100" : "ui.10"}
      _hover={
        isReadOnly
          ? undefined
          : {
              fill: "accent.60",
            }
      }
      {...rest}
      onClick={isReadOnly ? () => {} : onSelect}
    />
  );
};

export const RatingInput = ({ numberOfItems, value, ...props }: Props) => {
  return (
    <Wrap spacing="2">
      {[...Array(numberOfItems)].map((_, i) => {
        return (
          <RatingItem
            key={i}
            isActive={(value ?? -1) >= i}
            isReadOnly={props.isReadOnly}
            onSelect={() => {
              if (props.isReadOnly === true) {
                return;
              }
              props.onChange(i);
            }}
          />
        );
      })}
    </Wrap>
  );
};
