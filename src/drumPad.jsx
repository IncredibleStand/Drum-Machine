import { useEffect, useRef } from "react";

const DrumPad = ({ clipId, keyTrigger, src, updateDisplay }) => {
	// Ref to target the specific drum pad
	const buttonRef = useRef(null);

	const playSound = () => {
		const audio = document.getElementById(keyTrigger);
		audio.currentTime = 0;// Reset playback
		audio.play();// Play sound
		updateDisplay(clipId);// Update display with sound name

		// Change color of the specific button
		if (buttonRef.current) {
			buttonRef.current.style.backgroundColor = "darkcyan";
			setTimeout(() => {
				buttonRef.current.style.backgroundColor = "";
			}, 257);
		};
	};

	useEffect(() => {
		const handleKeyPress = (e) => {
			if (e.key.toUpperCase() === keyTrigger)playSound();
		};

		document.addEventListener("keydown", handleKeyPress);
		return () => {
			document.removeEventListener("keydown", handleKeyPress);// Clean up listener
		}
	}, [keyTrigger])// To ensure the useEffect re-runs if the value of keyTrigger changes

	return (
		<div
			className="drum-pad"
			id={clipId}// Set ID to sound name
			onClick={playSound}
			ref={buttonRef}
		>
			{keyTrigger}
			<audio className="clip" id={keyTrigger} src={src}></audio>	
		</div>
	);
};

export default DrumPad;