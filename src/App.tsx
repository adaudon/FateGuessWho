import { useState } from "react";
import "./App.css";
import ServantGrid from "./components/ServantGrid";
import SideBar from "./components/SideBar";
import { Box } from "@mui/material";
import rawData from "./data/servant.json";

interface ServantType {
  id: number;
  name: string;
  className: string;
  gender: string;
}

function App() {
  const [filters, setFilters] = useState({
    gender: [] as string[],
    className: [] as string[],
  });

  const servantData = rawData as ServantType[];

  const filteredServants = servantData.filter((servant) => {
    const isServant = !!servant.extraAssets.faces.ascension["1"];
    const genderMatch =
      filters.gender.length === 0 || filters.gender.includes(servant.gender);
    const classMatch =
      filters.className.length === 0 ||
      filters.className.includes(servant.className);

    return isServant && genderMatch && classMatch;
  });

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box sx={{ width: 300, flexShrink: 0 }}>
        <SideBar filters={filters} setFilters={setFilters} />
      </Box>
      <Box
        sx={{
          overflowY: "auto",
          padding: 2,
        }}
      >
        <ServantGrid servants={filteredServants} />
      </Box>
    </Box>
  );
}

export default App;
