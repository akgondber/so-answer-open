import { buildItems } from "../../helpers.js";

const items = [
	{
		url: "https://stackoverflow.com/questions/35604617/react-router-with-optional-path-parameter",
		tags: ["router", "react-router"],
	},
	{
		url: "https://stackoverflow.com/questions/53090432/react-hooks-right-way-to-clear-timeouts-and-intervals",
		tags: ["timeout"],
	},
	{
		url: "https://stackoverflow.com/questions/38394015/how-to-pass-data-from-child-component-to-its-parent-in-reactjs",
		tags: ["parent", "child"],
	},
	{
		url: "https://stackoverflow.com/questions/53165945/what-is-usestate-in-react",
		tags: ["usestate"],
	},
];

const links = buildItems(items, "react");
export default links;
