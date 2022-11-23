import React from "react";
import { Box, Text } from "@chakra-ui/react";

export function Footer() {
	return (
		<Box
			id="footer"
			style={{
				position: "fixed",
				bottom: "50px",
				height: "50px",
				paddingTop: "50px",
			}}
		>
			<Text>Footer</Text>
		</Box>
	);
}
