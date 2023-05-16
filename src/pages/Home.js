import { Box } from "@mui/material";
import { useState } from "react";
import Container from "../components/CardContainer";
import HubBage from "../components/HubBage";
import NewUser from "../components/NewUser";
import NewUserDialog from "../components/NewUserDialog";
import UserCard from "../components/UserCard";
import MenuPage from "./MenuPage";

export default function Home(props) {
  const { menuPage, setMenuPage } = props;
  const [newUserDialog, setNewUserDialog] = useState(false);

  return (
    <>
      {!menuPage ? (
        <Container sx={{ background: "#F4F4F4" }}>
          <Box sx={{ width: "100%", position: "relative" }}>
            <HubBage />
            <NewUser onClick={() => setNewUserDialog(true)} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                mt: "100px",
              }}
            >
              {[...Array(16).keys()].map((user) => (
                <UserCard onClick={() => setMenuPage(true)} key={user} />
              ))}
            </Box>
          </Box>

          <NewUserDialog
            open={newUserDialog}
            onClose={() => setNewUserDialog(false)}
          />
        </Container>
      ) : (
        <MenuPage />
      )}
    </>
  );
}
