import stateLinks from "./js-grouped/state.js";
import nodeLinks from "./js-grouped/node.js";
import reactLinks from "./js-grouped/react.js";

const commonLinks = [
	{
		url: "https://stackoverflow.com/questions/9932957/how-can-i-remove-a-character-from-a-string-using-javascript",
		tags: ["char", "string"],
	},
];

const links = [...commonLinks, ...stateLinks, ...nodeLinks, ...reactLinks];

export default links;
