import { NavigationContainer } from "@react-navigation/native";
import MainTabNavigation from "./src/navigations/MainTabNavigation"
import {QueryClient, QueryClientProvider} from 'react-query'

export default function App() {
  const queryClient = new QueryClient()

  return (
        <QueryClientProvider client={queryClient}>
          <NavigationContainer>
            <MainTabNavigation/>
          </NavigationContainer>
        </QueryClientProvider>
  );
}

