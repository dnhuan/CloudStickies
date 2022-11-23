import React from "react";
import { Rnd } from "react-rnd";
import { Box, Button, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteSticky } from "../stickiesSlice";

export function Sticky({ sticky, x, y, h, w }) {
	const dispatch = useDispatch();

	return (
		<>
			<Button onClick={() => dispatch(deleteSticky(sticky.id))}>
				<Text>Delete</Text>
			</Button>
			<Rnd
				default={{
					x: x,
					y: y,
					width: w,
					height: h,
				}}
			>
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
			</Rnd>
		</>
	);
}
