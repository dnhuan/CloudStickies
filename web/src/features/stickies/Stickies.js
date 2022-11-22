import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectStickies, addSticky, deleteSticky } from "./stickiesSlice";
import styles from "./Stickies.module.css";

export function Stickies() {
	const stickies = useSelector(selectStickies);
	const dispatch = useDispatch();

	return (
		<div>
			<div className={styles.row}>
				<button
					className={styles.button}
					onClick={() =>
						dispatch(addSticky({ id: "4", content: "new" }))
					}
				>
					Add Sticky
				</button>
			</div>
			<div className={styles.row}>
				<ul>
					{stickies.map((sticky) => (
						<li key={sticky.id}>
							{sticky.content}
							<button
								onClick={() =>
									dispatch(deleteSticky(sticky.id))
								}
							>
								Delete
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
