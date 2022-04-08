import { theme, isChakraTheme } from "@chakra-ui/theme";
import { Dict, isFunction, mergeWith, pipe } from "@chakra-ui/utils";

/**
 * NOTE: This got too complex to manage and it's not worth the extra complexity.
 * We'll re-evaluate this API in the future releases.
 *
 * Function to override or customize the Chakra UI theme conveniently.
 * First extension overrides the baseTheme and following extensions override the preceding extensions.
 *
 * @example:
 * import { theme as baseTheme, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'
 *
 * const customTheme = extendTheme(
 *   {
 *     colors: {
 *       brand: {
 *         500: "#b4d455",
 *       },
 *     },
 *   },
 *   withDefaultColorScheme({ colorScheme: "red" }),
 *   baseTheme // optional
 * )
 */

function mergeThemeCustomizer(source: unknown, override: unknown, key: string, object: any) {
  if (
    (isFunction(source) || isFunction(override)) &&
    Object.prototype.hasOwnProperty.call(object, key)
  ) {
    return (...args: unknown[]) => {
      const sourceValue = isFunction(source) ? source(...args) : source;

      const overrideValue = isFunction(override) ? override(...args) : override;

      return mergeWith({}, sourceValue, overrideValue, mergeThemeCustomizer);
    };
  }

  // fallback to default behaviour
  return undefined;
}

export function mergeThemeOverride(...overrides: any[]): any {
  return mergeWith({}, ...overrides, mergeThemeCustomizer);
}

export function extendTheme(...extensions: Array<Dict | ((theme: Dict) => Dict)>): Dict {
  let overrides = [...extensions];
  let baseTheme = extensions[extensions.length - 1];

  if (
    isChakraTheme(baseTheme) &&
    // this ensures backward compatibility
    // previously only `extendTheme(override, baseTheme?)` was allowed
    overrides.length > 1
  ) {
    overrides = overrides.slice(0, overrides.length - 1);
  } else {
    baseTheme = theme;
  }

  return pipe(
    ...overrides.map(
      (extension) => (prevTheme: any) =>
        isFunction(extension)
          ? (extension as any)(prevTheme)
          : mergeThemeOverride(prevTheme, extension),
    ),
  )(baseTheme);
}
