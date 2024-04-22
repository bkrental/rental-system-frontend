import {
  setIsStepCompleted,
  setTransactionType,
} from "@/redux/features/createPostSlice";
import { getTransactionType } from "@/redux/selectors";
import { Stack, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Unstable_Grid2";
import HouseRentSvg from "@public/house_rent.svg";
import HouseSaleSvg from "@public/house_sale.svg";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const boxStyles = {
  minHeight: 60,
  border: 1,
  borderRadius: 2,
  borderColor: grey[300],
  p: 2,
  cursor: "pointer",
  "&:hover": {
    borderColor: "transparent",
    boxShadow: `0 0 0 2px ${grey[900]}`,
  },
};

const boxSelectedStyles = {
  ...boxStyles,
  border: 1,
  borderColor: "transparent",
  boxShadow: `0 0 0 2px ${grey[900]}`,
  backgroundColor: grey[200],
};

export default function TransactionTypeForm({}) {
  const dispatch = useDispatch();
  const transactionType = useSelector(getTransactionType);

  const changeTransactionType = (type) => {
    dispatch(setTransactionType(type));
  };

  useEffect(() => {
    if (["rent", "sale"].includes(transactionType)) {
      dispatch(setIsStepCompleted(true));
    } else {
      dispatch(setIsStepCompleted(false));
    }
  }, [transactionType]);

  return (
    <Grid container spacing={3}>
      <Grid xs={6}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          onClick={() => changeTransactionType("rent")}
          sx={transactionType === "rent" ? boxSelectedStyles : boxStyles}
        >
          <Image src={HouseRentSvg} width={72} height={72} alt="rent image" />
          <Typography variant="h6" fontWeight="bold">
            For Rent
          </Typography>
        </Stack>
      </Grid>
      <Grid xs={6}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          onClick={() => changeTransactionType("sale")}
          sx={transactionType === "sale" ? boxSelectedStyles : boxStyles}
        >
          {/* <Icon fontSize="large" sx={{ color: grey[720] }} /> */}
          <Image src={HouseSaleSvg} width={72} height={72} alt="sale image" />
          <Typography variant="h6" fontWeight="bold">
            For Sale
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}
