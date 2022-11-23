import React from "react";
import { Stickies } from "./features/stickies/Stickies";
import { ChakraProvider, useDisclosure, Box } from "@chakra-ui/react";

import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import theme from "./app/theme";

function App() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<ChakraProvider theme={theme}>
			<Box
				direction="column"
				id="body"
				style={{
					height: "fit-content",
					width: "fit-content",
					boxSizing: "border-box",
					position: "absolute",
				}}
			>
				<NavBar isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
				<Box style={{ position: "absolute", top: isOpen ? 208 : 64 }}>
					<Stickies />
				</Box>
				<Footer />
			</Box>
		</ChakraProvider>
	);
}

export default App;
