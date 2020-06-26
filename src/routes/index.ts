import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SplashPage from "src/pages/Splash";
import HomePage from "src/pages/Home";

export const NAV = {
  SPLASH: "Splash",
  HOME: "Home",
};

const Splash = {
  screen: SplashPage,
  navigationOptions: () => {
    return { title: "splash" + NAV.HOME };
  },
};

const Home = {
  screen: HomePage,
  navigationOptions: () => {
    return { title: "home" };
  },
};

const Navigation = createStackNavigator(
  {
    Splash: Splash,
    Home: Home,
  },
  {
    initialRouteName: NAV.SPLASH,
  }
);

console.debug("kkkkk");

const AppContainer = createAppContainer(Navigation);
export default AppContainer;
