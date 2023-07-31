import {SafeAreaView, Text} from 'react-native';
import styled from 'styled-components/native';
import Login from './modules/login';

const TextNew = styled.Text`
  font-size: 27px;
  color: red;
`;

const App = () => {
  return ( 
    <SafeAreaView>
     <Login></Login>
    </SafeAreaView>
  );
}
export default App;


