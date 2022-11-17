import { createStyles, Paper, Text, ThemeIcon } from "@mantine/core";
import { IconColorSwatch, IconTrash } from "@tabler/icons";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  trash: {
    position: "absolute",
    right: "25px",
    cursor: "pointer",
  },
  card: {
    position: "relative",
    overflow: "hidden",
    transition: "transform 150ms ease, box-shadow 100ms ease",
    padding: theme.spacing.xl,
    paddingLeft: theme.spacing.xl * 2,

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "scale(1.02)",
    },

    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: 6,
      backgroundImage: theme.fn.linearGradient(
        0,
        theme.colors.pink[6],
        theme.colors.orange[6]
      ),
    },
  },
}));

export function Note({ title, description, id }) {
  const { classes } = useStyles();
  const [isHover, setIsHover] = useState(false);
  const handleDelete = () => {
    fetch("http://127.0.0.1:8090/api/collections/notes/records/" + id, {
      method: "DELETE",
    })
      .then((res) => res.text()) // or res.json()
      .then(window.location.reload(false));
  };
  return (
    <Paper
      withBorder
      radius="md"
      className={classes.card}
      onMouseEnter={(e) => {
        setIsHover(true);
      }}
      onMouseLeave={(e) => {
        setIsHover(false);
      }}
    >
      <IconTrash
        className={classes.trash}
        display={isHover ? "block" : "none"}
        onClick={handleDelete}
      />
      <ThemeIcon
        size="xl"
        radius="md"
        variant="gradient"
        gradient={{ deg: 0, from: "pink", to: "orange" }}
      >
        <IconColorSwatch size={28} stroke={1.5} />
      </ThemeIcon>

      <Text size="xl" weight={500} mt="md">
        {title}
      </Text>
      <Text size="sm" mt="sm" color="dimmed">
        {description}
      </Text>
    </Paper>
  );
}
