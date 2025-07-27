import {
  Box,
  Button,
  Typography,
  Drawer,
  Autocomplete,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { selectRandomServant } from "../utils/utils";
import FilterButtons from "./FilterButtons";

function SideBar({ filters, setFilters }) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [targetServant, setTargetServant] = useState(() =>
    selectRandomServant()
  );
  const rarity = [5, 4, 3, 2, 1];
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
  const traits = [
    "oni",
    "shutenDouji",
    "nobunaga",
    "child",
    "giant",
    "lawful",
    "heavenOrEarth",
    "roman",
    "lowRarity",
    "chaotic",
    "strong vs Alter Ego",
    "ignoreClassDisadvantage",
    "argonaut",
    "threatToHumanity",
    "illya",
    "wildBeast",
    "mecha",
    "superGiant",
    "livingHuman",
    "greekMythologyMales",
    "king",
    "arthur",
    "saberface",
    "evil",
    "dragon",
    "divine",
    "brynhildsBeloved",
    "hyde",
    "demonic",
    "beast",
    "weakToEnumaElish",
    "riding",
    "humanoid",
  ];
  const attributes = ["beast", "star", "heaven", "human", "earth"];

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

      <Drawer
        anchor="right"
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
      >
        <Box sx={{ width: 250, padding: 2 }}>
          <Typography variant="h6">Filters</Typography>
          <FilterButtons
            label="Rarity"
            options={rarity}
            selected={filters.rarity}
            onChange={(newRarity) =>
              setFilters((f) => ({ ...f, rarity: newRarity }))
            }
          />
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
          <FilterButtons
            label="Attribute"
            options={attributes}
            selected={filters.attributes}
            onChange={(newAttribute) =>
              setFilters((f) => ({ ...f, attributes: newAttribute }))
            }
          />
          <Autocomplete
            multiple
            options={traits}
            value={filters.traits}
            onChange={(event, newValue) =>
              setFilters((prev) => ({ ...prev, traits: newValue }))
            }
            renderInput={(params) => <TextField {...params} label="traits" />}
            sx={{ marginBottom: 2 }}
          />

          <Button onClick={() => setFilterOpen(false)}>Close</Button>
        </Box>
      </Drawer>
    </Box>
  );
}

export default SideBar;
