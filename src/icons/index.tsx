import { createIcon } from "@chakra-ui/icon";
import React from "react";

export const CaretLeftIcon = createIcon({
  viewBox: "0 0 256 512",
  path: (
    <path
      fill="currentColor"
      d="M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z"
    />
  ),
});

export const CaretRightIcon = createIcon({
  viewBox: "0 0 256 512",
  path: (
    <path
      fill="currentColor"
      d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
    ></path>
  ),
});

export const HamburgerIcon = createIcon({
  viewBox: "0 0 448 512",
  path: (
    <path
      fill="currentColor"
      d="M416 224H31.1C14.33 224 0 238.3 0 256s14.33 32 31.1 32h384C433.7 288 448 273.7 448 256S433.7 224 416 224zM416 384H31.1C14.33 384 0 398.3 0 415.1S14.33 448 31.1 448h384C433.7 448 448 433.7 448 416S433.7 384 416 384zM416 64H31.1C14.33 64 0 78.33 0 95.1S14.33 128 31.1 128h384C433.7 128 448 113.7 448 96S433.7 64 416 64z"
    ></path>
  ),
});
