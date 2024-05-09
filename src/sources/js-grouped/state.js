import { buildItems } from "../../helpers.js";

const items = [
	"https://stackoverflow.com/questions/73200186/zustand-state-with-javascript-map-is-not-updating",
	{
		url: "https://stackoverflow.com/questions/35836290/access-state-inside-of-mapdispatchtoprops-method",
		tags: ["redux"],
	},
	{
		url: "https://stackoverflow.com/questions/48913566/how-does-create-react-app-re-use-an-existing-browser-tab-after-running-npm-run/48915952",
		tags: ["applescript"],
	},
	{
		url: "https://stackoverflow.com/questions/57472105/react-redux-useselector-typescript-type-for-state",
		tags: ["redux"],
	},
	{
		url: "https://stackoverflow.com/questions/75530833/how-to-call-zustand-react-hook-outside-of-react-component",
		tags: ["zustand", "outside"],
	},
];

const links = buildItems(items, "state");
// items.map(item => ({
//     url: typeof item === 'object' ? item.url : item,
//     tags: typeof item === 'object' ? [...(item.tags || []), 'state'] : ['state'],
// }));

export default links;
