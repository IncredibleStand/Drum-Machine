import { useState } from "react";
import DrumPad from "./drumPad.jsx"
import "./index.css"

const padBankOne = [
  { key: "Q", sound: "Heater 1", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },
  { key: "W", sound: "Heater 2", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },
  { key: "E", sound: "Heater 3", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },
  { key: "A", sound: "Heater 4", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },
  { key: "S", sound: "Clap", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },
  { key: "D", sound: "Open-HH", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },
  { key: "Z", sound: "Kick-n'-Hat", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },
  { key: "X", sound: "Kick", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },
  { key: "C", sound: "Closed-HH", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }
];
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																		
const padBankTwo = [
  { key: "Q", sound: "Chord-1", src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" },
  { key: "W", sound: "Chord-2", src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" },
  { key: "E", sound: "Chord-3", src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" },
  { key: "A", sound: "Shaker", src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" },
  { key: "S", sound: "Open-HH", src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" },
  { key: "D", sound: "Closed-HH", src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" },
  { key: "Z", sound: "Punchy-Kick", src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" },
  { key: "X", sound: "Side-Stick", src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" },
  { key: "C", sound: "Snare", src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" },
];

const DrumMachine = () => {
	const [currentSound, setCurrentSound] = useState("");
	const [currentPadBank, setCurrentPadBank] = useState(padBankOne);

	const updateDisplay = (sound) => setCurrentSound(sound);

	const togglePadBank = () => {
		setCurrentPadBank(currentPadBank === padBankOne ? padBankTwo : padBankOne);
		setCurrentSound(currentPadBank === padBankOne ? "Smooth Piano Kit" : "Heater Kit");
	};

	return (
		<div id="drum-machine">
			<div id="display">
				{ currentSound || "Play a sound" }
			</div>

			<div className="row">
				{currentPadBank.map((pad) => (

					<DrumPad 
						key={pad.key}
						clipId={pad.sound}
						keyTrigger={pad.key}
						src={pad.src}
						updateDisplay={updateDisplay}
					/>	
				))}
			</div>

			<button onClick={togglePadBank}>
				Switch Pad Bank
			</button>	
		</div> 
	);
};

export default DrumMachine;