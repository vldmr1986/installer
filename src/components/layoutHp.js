import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  Box,
  Button,
  Header,
  Keyboard,
  ResponsiveContext,
  Text,
  TextInput,
  //   FormAdd
} from "grommet";
import { Search as SearchIcon, Hpe, FormAdd } from "grommet-icons";

const StyledTextInput = styled(TextInput).attrs(() => ({
  "aria-labelledby": "search-icon-example",
}))``;

export const HeaderExample = () => {
  const size = useContext(ResponsiveContext);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (focused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [focused, setFocused]);

  return (
    <Header
      align="center"
      direction="row"
      flex={false}
      justify="between"
      gap="medium"
      fill="horizontal"
      pad="medium"
    >
      <Box align="center" justify="center" direction="row" gap="small">
        <Hpe color="brand" />
        <Box align="center" justify="center" direction="row" gap="xsmall">
          <Text weight="bold" color="text-strong">
            HPE
          </Text>
          <Text color="text-strong">DESIGN</Text>
        </Box>
      </Box>
      <Button label="Label" reverse icon={<FormAdd />} gap="small" />
    </Header>
  );
};
