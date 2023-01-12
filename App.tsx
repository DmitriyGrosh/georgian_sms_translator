import {SafeAreaView, StyleSheet, View} from 'react-native';
import Translator from './components/translator';
import DismissKeyboard from "./components/dismissKeyboard";

export default function App() {
  return (
    <SafeAreaView>
      <DismissKeyboard>
        <View style={styles.container}>
          <Translator />
        </View>
      </DismissKeyboard>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    paddingRight: 10
  },
});
