import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";
import { POPPINS } from "../utils/config";

export default function AreYouSureDialog(props) {
  const { open, onClose } = props;

  return (
    <Dialog
      sx={{
        "& .MuiPaper-root": {
          background: "#FFFFFF",
          border: "1px solid #EFF0F7",
          boxShadow: "0px 5px 16px rgba(8, 15, 52, 0.06)",
          borderRadius: "34px",
          pb: "20px",
          px: "27px",
        },
      }}
      open={open}
      onClose={onClose}
    >
      <DialogTitle
        sx={{
          fontWeight: 700,
          fontSize: "30px",
          textAlign: "center",
          mb: "20px",
          mt: "24px",
          ...POPPINS,
        }}
      >
        Are you sure?
      </DialogTitle>
      <DialogActions>
        <Button
          sx={{
            background: "#FFFFFF",
            border: "2.23171px solid #47B2FF",
            boxShadow: "0px 4.46341px 17.8537px rgba(74, 58, 255, 0.18)",
            borderRadius: "14.878px",
            fontWeight: 600,
            fontSize: "16.8049px",
            mr: "33px",
            color: "#47B2FF",
            py: "15px",
            px: "25px",
            ...POPPINS,
          }}
          onClick={onClose}
        >
          No, Not Yet !
        </Button>
        <Button
          sx={{
            background: "#47B2FF",
            boxShadow: "0px 3px 12px rgba(74, 58, 255, 0.18)",
            borderRadius: "20px",
            fontWeight: 700,
            fontSize: "18px",
            color: "#fff",
            py: "15px",
            px: "25px",
            ...POPPINS,
            "&:hover": {
              background: "#50aef1",
            },
          }}
          onClick={onClose}
        >
          Yes, Done !
        </Button>
      </DialogActions>
    </Dialog>
  );
}
