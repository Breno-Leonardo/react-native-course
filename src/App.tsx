import {SafeAreaView, Text} from 'react-native';
import styled from 'styled-components/native';

const TextNew = styled.Text`
  font-size: 27px;
  color: red;
`;

const App = () => {
  return ( 
    <SafeAreaView>
      <Text>Testando</Text>
      <TextNew>Test </TextNew>
    </SafeAreaView>
  );
}
export default App;


