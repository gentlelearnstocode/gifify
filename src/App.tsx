import { AppRoutes } from './routes';
import { AppProvider } from './providers/AppProvider';
import './App.css';

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default App;
