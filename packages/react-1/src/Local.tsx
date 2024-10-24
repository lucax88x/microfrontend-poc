import '@poc/ui/base';
import './index.css';

import App from './App';
import { DrawerChat } from './components/DrawerChat';
import { Line } from './components/Line';

export default () => {
  return (
    <>
      <App />
      <Line />
      <DrawerChat />
    </>
  );
};
