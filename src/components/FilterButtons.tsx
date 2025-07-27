import { Box, Button } from "@mui/material";

function FilterButtons({
  options,
  selected,
  onChange,
  label,
}: {
  options: string[];
  selected: string[];
  onChange: (newSelected: string[]) => void;
  label: string;
}) {
  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((o) => o !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <Box>
      <strong>{label}</strong>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
        {options.map((option) => {
          const isSelected = selected.includes(option);
          return (
            <Button
              key={option}
              variant={isSelected ? "contained" : "outlined"}
              color={isSelected ? "primary" : "inherit"}
              onClick={() => toggleOption(option)}
              size="small"
            >
              {option}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
}

export default FilterButtons;
