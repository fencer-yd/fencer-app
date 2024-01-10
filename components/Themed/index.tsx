import {
  Button as DefaultButton,
  ButtonProps as DefaultButtonProps,
} from "@rneui/themed";
import {
  View as DefaultView,
  Text as DefaultText,
  useColorScheme,
} from "react-native";

import { Colors } from "@/constants";

interface Props {
  lightColor?: string;
  darkColor?: string;
}

export type TextProps = Props & DefaultText["props"];
export type ViewProps = Props & DefaultView["props"];
export type ButtonProps = Props & DefaultButtonProps;

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}

export function Button(props: ButtonProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return <DefaultButton style={[{ backgroundColor }, style]} {...otherProps} />;
}
