import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import rawData from "../data/servant.json";

interface ServantType {
  id: number;
  name: string;
  className: string;
  gender: string;
}

function ServantGrid() {
  const servantData = rawData as ServantType[];
  const filteredServantData = servantData.filter(
    (servant) => !!servant.extraAssets.faces.ascension["1"]
  );

  return (
    <Grid container spacing={2}>
      {filteredServantData.map((servant) => (
        <Grid
          item
          xs={6}
          sm={4}
          md={3}
          key={servant.id}
          sx={{ width: "200px" }}
        >
          <Card
            sx={{
              cursor: "pointer",
              transition: "0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <CardMedia
              component="img"
              height="180"
              image={servant.extraAssets.faces.ascension["1"]}
              alt={servant.name}
            />
            <CardContent>
              <Typography
                sx={{ height: "60px" }}
                variant="subtitle1"
                align="center"
              >
                {servant.name}
              </Typography>
              <Typography variant="caption" align="center" display="block">
                {servant.className} | {servant.gender}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
export default ServantGrid;
