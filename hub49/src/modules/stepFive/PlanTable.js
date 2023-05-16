import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  TableHead,
  Box,
  TextField,
} from "@mui/material";
import { DM_SANS } from "../../utils/config";

export default function PlanTable(props) {
  const { data } = props;

  const tableColumns = [
    <TableCell key="number">
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "17.3117px",
          textAlign: "center",
          ...DM_SANS,
        }}
      >
        #
      </Typography>
    </TableCell>,
    <TableCell key="textOnPost">
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "17.3117px",
          textAlign: "center",
          ...DM_SANS,
        }}
      >
        Text on Post
      </Typography>
    </TableCell>,
    <TableCell key="caption">
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "17.3117px",
          textAlign: "center",
          ...DM_SANS,
        }}
      >
        Caption
      </Typography>
    </TableCell>,
    <TableCell key="hashtags">
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "17.3117px",
          textAlign: "center",
          ...DM_SANS,
        }}
      >
        Hashtags
      </Typography>
    </TableCell>,
  ];
  return (
    <Table
      sx={{
        border: "none",
        "& td": {
          border: 0,
          py: 0.94,
        },
        "& th": {
          border: 0,
        },
      }}
    >
      <TableHead>
        <TableRow>{tableColumns}</TableRow>
      </TableHead>
      <TableBody>
        {data.map((item, index) => (
          <RowItem key={item.id} item={item} index={index} />
        ))}
      </TableBody>
    </Table>
  );
}

function RowItem(props) {
  const { item } = props;

  return (
    <TableRow
      sx={{
        "& .MuiFormControl-root": {
          height: "63px",
          borderRadius: "10px",
          border: "none",
        },
        "& .MuiInputBase-root": {
          height: "63px",
          fontSize: "10px",
          border: "none",
          borderRadius: "10px",
        },
      }}
    >
      <TableCell>
        <Typography sx={{ textAlign: "center" }}>{item.id}</Typography>
      </TableCell>
      <TableCell>
        <TextField
          multiline
          rows={4}
          sx={{
            fontWeight: 400,
            color: "#6F6C90",
            boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
            background: "#fff",
            maxWidth: "152px",
            width: "100%",
            ...DM_SANS,
          }}
          value={item.textOnPost}
        />
      </TableCell>
      <TableCell>
        <TextField
          multiline
          rows={4}
          sx={{
            fontWeight: 400,
            color: "#6F6C90",
            boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
            background: "#fff",
            ...DM_SANS,
          }}
          value={item.caption}
        />
      </TableCell>
      <TableCell sx={{ pb: 1 }}>
        <TextField
          multiline
          rows={4}
          sx={{
            fontWeight: 400,
            color: "#6F6C90",
            boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
            background: "#fff",
            maxWidth: "122px",
            width: "100%",
            ...DM_SANS,
          }}
          value={item.hashtags}
        />
      </TableCell>
    </TableRow>
  );
}
