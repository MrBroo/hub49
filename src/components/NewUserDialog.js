import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  InputLabel,
  TextField,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import { DM_SANS, POPPINS } from "../utils/config";

export default function NewUserDialog(props) {
  const { open, onClose } = props;

  return (
    <Dialog
      sx={{
        "& .MuiPaper-root": {
          background: "#fff",
          border: "1px solid #EFF0F7",
          boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
          borderRadius: "34px",
          pb: "30px",
        },
      }}
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={onClose}
    >
      <DialogTitle>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "30.9042px",
            textAlign: "center",
            color: "#4C4C4C",
            mt: "28px",
            ...POPPINS,
          }}
        >
          Enter New User Email
        </Typography>
      </DialogTitle>
      <DialogContent sx={{ textAlign: "center" }}>
        <Box
          sx={{
            "& .MuiFormControl-root": {
              height: "48px",
              maxWidth: "287px",
              width: "100%",
            },
            "& .MuiInputBase-root": {
              height: "48px",
            },
          }}
        >
          <InputLabel
            htmlFor="mail"
            sx={{
              color: "#565656",
              fontWeight: 500,
              fontSize: "12.9838px",
              mb: 0.5,
              ...DM_SANS,
            }}
          >
            Email
          </InputLabel>
          <TextField
            fullWidth
            name="mail"
            id="mail"
            sx={{
              background: "#FFFFFF",
              border: "1.5px solid #47B2FF",
              boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
              borderRadius: "10px",
              px: 0.5,
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
            }}
          />
        </Box>
      </DialogContent>
      <DialogActions
        sx={{ display: "flex", justifyContent: "center", mt: "12px" }}
      >
        <Button
          onClick={onClose}
          sx={{
            background: "#FFFFFF",
            border: "2.23171px solid #47B2FF",
            boxShadow: "0px 4.46341px 17.8537px rgba(74, 58, 255, 0.18)",
            borderRadius: "14.878px",
            fontWeight: 600,
            fontSize: "16.8049px",
            mr: "33px",
            color: "#47B2FF",
            py: "12px",
            px: "45px",
            textTransform: "unset",
            ...POPPINS,
          }}
        >
          Cancel
        </Button>
        <Button
          sx={{
            background: "#47B2FF",
            boxShadow: "0px 3px 12px rgba(74, 58, 255, 0.18)",
            borderRadius: "20px",
            fontWeight: 700,
            fontSize: "18px",
            color: "#fff",
            py: "13px",
            px: "45px",
            ...POPPINS,
            textTransform: "unset",
            "&:hover": {
              background: "#50aef1",
            },
          }}
          onClick={onClose}
        >
          Add User
        </Button>
      </DialogActions>
    </Dialog>
  );
}
