import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import Container from "../components/CardContainer";
import { POPPINS } from "../utils/config";
import Creations from "./Creations";
import Details from "./Details";
import Plans from "./Plans";

export default function MenuPage() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            width: "100%",
            boxShadow: "0px 3px 12px rgba(74, 58, 255, 0.18)",
            "& .Mui-selected": {
              color: "#fff !important",
              backgroundColor: "#47B2FF",
            },
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tab sx={{ ...tabStyle }} label="Details" />
          <Tab
            sx={{
              ...tabStyle,
              boxShadow: "0px 3px 12px rgba(74, 58, 255, 0.18)",
            }}
            label="Plans"
          />
          <Tab sx={{ ...tabStyle }} label="Creations" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Details />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Plans />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Creations />
        </TabPanel>
      </Box>
    </Container>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      sx={{ height: "100%" }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3, height: "100%" }}>{children}</Box>}
    </Box>
  );
}

const tabStyle = {
  fontWeight: 700,
  fontSize: "26px",
  maxWidth: "432px",
  width: "100%",
  color: "#47B2FF",
  ...POPPINS,
};
