import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteSticky } from "../stickiesSlice";

export function Sticky({ sticky }) {
	const dispatch = useDispatch();

	return (
		<Box
			id="sticky"
			style={{
				height: "100%",
				width: "100%",
				overflow: "hidden",
			}}
		>
			<Box style={{ background: "#ADF4FF" }}>
				<Box
					className="drag-resizable__handler"
					style={{ background: "#FFC7C7", cursor: "grab" }}
				>
					<Text id="StickyPreview">Drag Me</Text>
				</Box>

				<Button onClick={() => dispatch(deleteSticky(sticky.id))}>
					Delete
				</Button>
			</Box>
			<Box
				style={{
					backgroundColor: sticky.color || "#FDF39B",
					height: "100%",
					width: "100%",
					overflow: "hidden",
					whiteSpace: "pre-line",
				}}
			>
				<Text>{sticky.content}</Text>
			</Box>
		</Box>
	);
}
