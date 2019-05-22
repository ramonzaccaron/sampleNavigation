import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

import { createDrawerNavigator, createAppContainer } from "react-navigation";

const Routes = createDrawerNavigator({
    Home: { screen: Page1 },
    About: { screen: Page2 },
    Help: {screen: Page3}
});

export default createAppContainer(Routes);