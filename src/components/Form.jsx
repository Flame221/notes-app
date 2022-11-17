import React from "react";
import {
  Button,
  createStyles,
  Group,
  Input,
  Paper,
  Text,
  Textarea,
  ThemeIcon,
} from "@mantine/core";
import { IconColorSwatch } from "@tabler/icons";
import { useForm } from "@mantine/form";

const useStyles = createStyles((theme) => ({
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

const Form = () => {
  const { classes } = useStyles();
  const form = useForm({
    initialValues: {
      title: "",
      description: "",
    },

    validate: {
      title: (value) => (value ? null : "It cannot be empty"),
    },
  });
  return (
    <Paper withBorder radius="md" my="lg" className={classes.card}>
      <form
        onSubmit={form.onSubmit((values) => {
          const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          };
          fetch(
            "http://127.0.0.1:8090/api/collections/notes/records",
            requestOptions
          )
            .then((response) => response.json())
            .then(window.location.reload(false));
        })}
      >
        <Input
          size="xl"
          weight={500}
          mt="md"
          placeholder="Title..."
          {...form.getInputProps("title")}
        />
        <Textarea
          size="sm"
          autosize
          minRows={2}
          mt="sm"
          color="dimmed"
          placeholder="Description..."
          {...form.getInputProps("description")}
        />
        <Group position="right" mt="md">
          <Button
            variant="gradient"
            gradient={{ deg: 0, from: "pink", to: "orange" }}
            mt="sm"
            type="submit"
          >
            Enter
          </Button>
        </Group>
      </form>
    </Paper>
  );
};

export default Form;
