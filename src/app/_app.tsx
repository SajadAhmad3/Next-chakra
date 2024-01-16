"use client"

import { ChakraProvider, GlobalStyle, extendTheme } from "@chakra-ui/react";
import customTheme from '../../theme';

export default function ThemeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ChakraProvider theme={customTheme}>
      {children}
    </ChakraProvider>
  )
}