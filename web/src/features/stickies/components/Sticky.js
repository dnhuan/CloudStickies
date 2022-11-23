import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteSticky } from "../stickiesSlice";

export function Sticky({ sticky }) {
	const dispatch = useDispatch();

	return (
		<Box
			style={{
				backgroundColor: sticky.color || "#FDF39B",
				height: "100%",
				width: "100%",
				overflow: "hidden",
				whiteSpace: "pre-line",
			}}
		>
			<Box className="drag-resizable__body" style={{ background: "red" }}>
				<Text>Drag Me</Text>
			</Box>
			<Button onClick={() => dispatch(deleteSticky(sticky.id))}>
				<Text>Delete</Text>
			</Button>

			<Box>
				<Text>{sticky.content}</Text>
			</Box>
		</Box>
	);
}
