import "./App.css";
import ServantGrid from "./components/ServantGrid";
import SideBar from "./components/SideBar";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box sx={{ width: 300, flexShrink: 0 }}>
        <SideBar />
      </Box>
      <Box
        sx={{
          overflowY: "auto",
          padding: 2,
        }}
      >
        <ServantGrid />
      </Box>
    </Box>
  );
}

export default App;
