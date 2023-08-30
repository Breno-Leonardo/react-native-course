import store from './store';
import {Provider} from 'react-redux';
import GlobalModal from './shared/components/modal/globalModal/GlobalModal';
import Navigation from './Navigation';

const App = () => {
  return (
    <Provider store={store}>
      <GlobalModal></GlobalModal>
      <Navigation></Navigation>
    </Provider>
  );
};
export default App;
