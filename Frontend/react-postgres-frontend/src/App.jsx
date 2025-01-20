import "./App.css"
import HeroText from "./Components/heroText/HeroText";
import NavBar from "./Components/navbar/NavBar";
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

export default function App() {
  return(
    <QueryClientProvider client={queryClient}>
      <div className="hero">
        <NavBar />
        <HeroText />
      </div>
    </QueryClientProvider>
  )
}