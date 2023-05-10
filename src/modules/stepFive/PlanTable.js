import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  TableHead,
  Box,
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
    <TableRow>
      <TableCell>
        <Typography sx={{ textAlign: "center" }}>{item.id}</Typography>
      </TableCell>
      <TableCell>
        <Box
          sx={{
            maxWidth: "152px",
            width: "100%",
            height: "63px",
            background: "#fff",
            border: "0.721321px solid #EFF0F7",
            boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "10px",
              height: "63px",
              color: "#6F6C90",
              ...DM_SANS,
            }}
          >
            {item.textOnPost}
          </Typography>
        </Box>
      </TableCell>
      <TableCell>
        <Box
          sx={{
            maxWidth: "197px",
            width: "100%",
            background: "#fff",
            border: "0.721321px solid #EFF0F7",
            boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "10px",
              color: "#6F6C90",
              ...DM_SANS,
            }}
          >
            {item.caption}
          </Typography>
        </Box>
      </TableCell>
      <TableCell>
        <Box
          sx={{
            maxWidth: "122px",
            width: "100%",
            background: "#fff",
            border: "0.721321px solid #EFF0F7",
            boxShadow: "0px 1.44264px 4.32792px rgba(19, 18, 66, 0.07)",
            borderRadius: "10px",
            padding: "10px",
          }}
        >
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "10px",
              color: "#6F6C90",
              ...DM_SANS,
            }}
          >
            {item.hashtags}
          </Typography>
        </Box>
      </TableCell>
    </TableRow>
  );
}
