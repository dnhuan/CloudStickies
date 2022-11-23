import React from "react";
import { useSelector } from "react-redux";
import { selectStickies } from "./stickiesSlice";
import { Box } from "@chakra-ui/react";
import { Sticky } from "./components/Sticky";

export function Stickies() {
	const stickies = useSelector(selectStickies);

	return (
		<Box
			id="stickies__body"
			style={{
				height: "fit-content",
				boxSizing: "border-box",
				width: "100%",
			}}
		>
			<Box>
				{stickies.map((sticky, index) => (
					<Sticky
						key={sticky.id}
						sticky={sticky}
						x={index * 10}
						y={(330 + 10) * index}
						h={330}
						w={330}
					/>
				))}
			</Box>
		</Box>
	);
}
