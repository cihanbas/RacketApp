import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type StackNavigationType = {
  Home: undefined;
  RateUsTest: undefined;
  RateUsControl: undefined;
};

export type SubNavigator<T extends StackNavigationType> = {
  [K in keyof T]: { screen: K; params?: T[K] };
}[keyof T];
export type NavigationStackProps = NativeStackScreenProps<
  StackNavigationType
>;
export type DefaultNavigationProps<T extends keyof StackNavigationType> =
  NativeStackScreenProps<StackNavigationType, T>;
export type NavigationProps = {
  navigation: NavigationStackProps['navigation'];
};
export type NavigationRouteProps = {
  route: NavigationStackProps['route'];
};