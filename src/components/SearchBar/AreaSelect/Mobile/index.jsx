import { Box, Stack, TextField, Typography, Slider, Button, useTheme } from "@mui/material";
import ArrowRight from "@mui/icons-material/ArrowRight";
import { useState } from "react";
import { grey } from "@mui/material/colors";
import { NumberParam, useQueryParam, withDefault } from "use-query-params";

export default function MobileAreaSelect() {
  const [bottomArea, setBottomArea] = useQueryParam("ba", withDefault(NumberParam, 0));
  const [topArea, setTopArea] = useQueryParam("ta", withDefault(NumberParam, 0));

  const [areaRange, setAreaRange] = useState([bottomArea, topArea]);
  const areaConfig = { min: 0, max: 50000, step: 1 };

  const theme = useTheme();

  const handleAreaSelect = (newAreaRange) => {
    const newBottomArea = Math.min(...newAreaRange);
    const newTopArea = Math.max(...newAreaRange);

    setTopArea(newTopArea === 0 ? undefined : newTopArea);
    setBottomArea(newBottomArea === 0 ? undefined : newBottomArea);
  };

  const handleSliderChange = (event, newAreaRange) => {
    setAreaRange(newAreaRange);
  };

  return (
    <Box width={"100%"}>
      <Box px={2}>
        <Typography variant="body1" color={grey[1000]} sx={{ fontWeight: 700 }} gutterBottom>
          Area (m<sup>2</sup>)
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            value={areaRange[0]}
            inputProps={{ type: "number", ...areaConfig }}
            onChange={(e) => setAreaRange((prev) => [e.target.value, prev[1]])}
          />
          <ArrowRight fontSize="large" />
          <TextField
            fullWidth
            size="small"
            variant="outlined"
            value={areaRange[1]}
            inputProps={{ type: "number", ...areaConfig }}
            onChange={(e) => setAreaRange((prev) => [prev[0], e.target.value])}
          />
        </Stack>
        <Slider {...areaConfig} value={areaRange} onChange={handleSliderChange} valueLabelDisplay="auto" />
      </Box>
    </Box>
  );
}
