import React from "react";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";

export function DragResizable({ children, x, y, h, w }) {
	return (
		<Draggable
			handle=".drag-resizable__handler"
			defaultPosition={{ x: x, y: y }}
		>
			<Resizable
				defaultSize={{
					width: w,
					height: h,
				}}
				style={{ position: "absolute" }}
			>
				{children}
			</Resizable>
		</Draggable>
	);
}
