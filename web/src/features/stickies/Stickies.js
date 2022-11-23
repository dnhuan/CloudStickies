import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectStickies, addSticky, deleteSticky } from "./stickiesSlice";
import { Box, Button, Text, UnorderedList, ListItem } from "@chakra-ui/react";

export function Stickies() {
	const stickies = useSelector(selectStickies);
	const dispatch = useDispatch();

	return (
		<Box>
			<Box>
				<Button
					onClick={() =>
						dispatch(addSticky({ id: "4", content: "new" }))
					}
				>
					<Text>Add Sticky</Text>
				</Button>
			</Box>
			<Box>
				<UnorderedList>
					{stickies.map((sticky) => (
						<ListItem key={sticky.id}>
							{sticky.content}
							<Button
								onClick={() =>
									dispatch(deleteSticky(sticky.id))
								}
							>
								<Text>Delete</Text>
							</Button>
						</ListItem>
					))}
				</UnorderedList>
			</Box>
		</Box>
	);
}
