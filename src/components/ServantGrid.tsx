import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

function ServantGrid({ servants }) {
  return (
    <Grid container spacing={2} justifyContent="center">
      {servants.map((servant) => (
        <Grid item key={servant.id} sx={{ width: "200px" }}>
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
