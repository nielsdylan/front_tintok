// import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from "./src/context";
import { RootNavigation } from "./src/navigation/RootNavigation";

export default function App() {
  return (
    <ThemeProvider>
      <RootNavigation></RootNavigation>
    </ThemeProvider>
  );
}

