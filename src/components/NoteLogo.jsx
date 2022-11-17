import React from "react";
import { IconNotes } from "@tabler/icons";
import {
  Container,
  createStyles,
  Flex,
  Stack,
  ThemeIcon,
  Title,
} from "@mantine/core";
const useStyles = createStyles((theme) => ({
  controls: {
    marginTop: theme.spacing.lg,
    display: "flex",
    justifyContent: "center",

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },
  logo: {},
  control: {
    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      height: 42,
      fontSize: theme.fontSizes.md,

      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

const NoteLogo = () => {
  // const { classes } = useStyles();
  return (
    <Flex flexdirection="row" gap="md">
      <ThemeIcon
        size="xl"
        radius="md"
        variant="gradient"
        gradient={{ deg: 0, from: "pink", to: "orange" }}
      >
        <IconNotes />
      </ThemeIcon>
      <Title sx={{ fontSize: "25px", fontWeight: "lighter" }}>Notes App</Title>
    </Flex>
  );
};

export default NoteLogo;
