import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth44696Navigator from '../features/EmailAuth44696/navigator';
import UserProfile44444Navigator from '../features/UserProfile44444/navigator';
import Tutorial44443Navigator from '../features/Tutorial44443/navigator';
import NotificationList44415Navigator from '../features/NotificationList44415/navigator';
import Settings44414Navigator from '../features/Settings44414/navigator';
import Settings44406Navigator from '../features/Settings44406/navigator';
import UserProfile44404Navigator from '../features/UserProfile44404/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
EmailAuth44696: { screen: EmailAuth44696Navigator },
UserProfile44444: { screen: UserProfile44444Navigator },
Tutorial44443: { screen: Tutorial44443Navigator },
NotificationList44415: { screen: NotificationList44415Navigator },
Settings44414: { screen: Settings44414Navigator },
Settings44406: { screen: Settings44406Navigator },
UserProfile44404: { screen: UserProfile44404Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
