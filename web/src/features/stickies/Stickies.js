import React from "react";
import { useSelector } from "react-redux";
import { selectStickies } from "./stickiesSlice";
import { Box } from "@chakra-ui/react";
import { Sticky } from "./components/Sticky";
import { DragResizable } from "../../components/drag-resizable/DragResizable";

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
					<DragResizable
						key={sticky.id}
						x={20 * index}
						y={20 * index}
						h={330}
						w={330}
					>
						<Sticky sticky={sticky} />
					</DragResizable>
				))}
			</Box>
		</Box>
	);
}
