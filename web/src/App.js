import React from "react";
import { Stickies } from "./features/stickies/Stickies";
import { ChakraProvider } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar/NavBar";

function App() {
	return (
		<ChakraProvider>
			<div id="body">
				<NavBar />
				<Stickies />
			</div>
		</ChakraProvider>
	);
}

export default App;
