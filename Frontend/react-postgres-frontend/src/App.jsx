import "./App.css"
import HeroText from "./Components/heroText/HeroText";
import NavBar from "./Components/navbar/NavBar";
import { QueryClient, QueryClientProvider } from 'react-query';
import TableSection from "./Components/table/Table";
import { useState } from "react";
const queryClient = new QueryClient();

export default function App() {
  const [selectedId,setSelectedId] = useState("")
  const handleDropdownChange = (id) =>{
    setSelectedId(id)
  }
  return(
    <QueryClientProvider client={queryClient}>
      <div className="hero">
        <NavBar />
        <HeroText onDropdownChange = {handleDropdownChange}/>
        {console.log(selectedId)}
      </div>
      <TableSection selectedId = {selectedId}/>
    </QueryClientProvider>
  )
}