import { Box, Button, Typography, Drawer } from "@mui/material";
import { useState } from "react";
import { selectRandomServant } from "../utils/utils";
import FilterButtons from "./FilterButtons";

function SideBar({ filters, setFilters }) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [targetServant, setTargetServant] = useState(() =>
    selectRandomServant()
  );
  const genders = ["male", "female", "unknown"];
  const classes = [
    "saber",
    "archer",
    "lancer",
    "assassin",
    "caster",
    "rider",
    "berserker",
  ];

  return (
    <Box
      sx={{
        padding: 3,
        borderRight: "1px solid #ddd",
        height: "100vh",
        boxSizing: "border-box",
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        Your Servant to Guess
      </Typography>
      {targetServant ? (
        <>
          <img
            src={targetServant.extraAssets.faces.ascension["1"]}
            alt={targetServant.name}
            style={{
              width: "80%",
              borderRadius: "30%",
              border: "blue 5px solid",
              margin: "auto",
              display: "block",
            }}
          />
          <Typography variant="subtitle1" align="center" mt={1}>
            {targetServant.name}
          </Typography>
          <Typography variant="body2" align="center" color="text.secondary">
            {targetServant.className} • {targetServant.gender}
          </Typography>
        </>
      ) : (
        <Typography>No servant selected yet.</Typography>
      )}
      <Button
        variant="contained"
        fullWidth
        sx={{ marginTop: 4 }}
        onClick={() => setTargetServant(() => selectRandomServant())}
      >
        New Servant
      </Button>
      <Button
        variant="contained"
        fullWidth
        sx={{ marginTop: 4 }}
        onClick={() => setFilterOpen(true)}
      >
        Open Filters
      </Button>

      {/* Filter Drawer */}
      <Drawer
        anchor="right"
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
      >
        {/* Put your filter controls here */}
        <Box sx={{ width: 250, padding: 2 }}>
          <Typography variant="h6">Filters</Typography>
          <FilterButtons
            label="Gender"
            options={genders}
            selected={filters.gender}
            onChange={(newGender) =>
              setFilters((f) => ({ ...f, gender: newGender }))
            }
          />
          <FilterButtons
            label="Class"
            options={classes}
            selected={filters.className}
            onChange={(newClasses) =>
              setFilters((f) => ({ ...f, className: newClasses }))
            }
          />
          <Button onClick={() => setFilterOpen(false)}>Close</Button>
        </Box>
      </Drawer>
    </Box>
  );
}

export default SideBar;
