import '@mantine/core/styles.css'
import Router from "./routes/Router"
import { MantineProvider, createTheme } from '@mantine/core'
import DataProvider from './context/DataContext';

function App() {
  const theme = createTheme({
    fontFamily: 'Manrope, sans-serif',
    colors: { 
      orange: [
        "#fff4e1",
        "#ffe8cc",
        "#fed09b",
        "#fdb766",
        "#fca13a",
        "#fc931d",
        "#fc8a08",
        "#e17800",
        "#c86a00",
        "#af5a00"
      ]
    }
  });

  return (
    <MantineProvider theme={theme}>
      <DataProvider>
        <Router />
      </DataProvider>
    </MantineProvider>
  )
}

export default App
