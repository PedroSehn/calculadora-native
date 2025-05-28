import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Switch} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext} from "./src/contex/ThemeContext";
import { useState} from "react";
import {Button} from "./src/components/Button";
import {myColors} from "./src/styles/Colors";
import {MyKeyboard} from "./src/components/MyKeyboard";
import {Styles} from "./src/styles/GlobalStyles"

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
      <SafeAreaProvider>
    <ThemeContext.Provider value={theme}>
    <SafeAreaView style={theme === "light" ? styles.container : [styles.container, {backgroundColor: myColors.dark}]}>
      <Switch
        value={theme === "light"}
        onValueChange={() => setTheme(theme === "light" ? "dark" : "light")}/>
      <Text style={theme === "light" ? Styles.smallTextDark : Styles.smallTextLight }>{`${theme} mode`}</Text>
      <MyKeyboard/>
    </SafeAreaView>
    </ThemeContext.Provider>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.light,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
