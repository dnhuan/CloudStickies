import React from "react";
import { Stickies } from "./features/stickies/Stickies";
import { ChakraProvider } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import theme from "./app/theme";

function App() {
	return (
		<ChakraProvider theme={theme}>
			<div
				id="body"
				style={{
					height: "fit-content",
					boxSizing: "border-box",
					width: "100%",
				}}
			>
				<NavBar />
				<Stickies />
				<Footer />
			</div>
		</ChakraProvider>
	);
}

export default App;
