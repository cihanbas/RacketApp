import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ControlRateReponse, TestRateReponse } from "../services/type";

export type StackNavigationType = {
  Home: undefined;
  RateUsTest: {
    userId: number
    testRate?: TestRateReponse
  };
  RateUsControl: {
    userId: number
    controlRate?: ControlRateReponse
  };
  Settings: undefined;
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