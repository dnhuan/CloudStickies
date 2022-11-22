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
					onClick={() => dispatch(addSticky("New Sticky"))}
				>
					Add Sticky
				</button>
			</div>
			<div className={styles.row}>
				<ul>
					{stickies.map((sticky, index) => (
						<li key={index}>
							{sticky}
							<button
								onClick={() => dispatch(deleteSticky(index))}
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
