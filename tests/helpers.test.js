import { expect, test } from "vitest";
import { buildItems } from "../src/helpers";

const items = [
	"https://stackoverflow.com/questions/73200186/zustand-state-with-javascript-map-is-not-updating",
	{
		url: "https://stackoverflow.com/questions/35836290/access-state-inside-of-mapdispatchtoprops-method",
		tags: ["redux"],
	},
];

test("adds additional tag", () => {
	const result = buildItems(items, "state");
	expect(result).toEqual([
		{
			tags: ["state"],
			url: "https://stackoverflow.com/questions/73200186/zustand-state-with-javascript-map-is-not-updating",
		},
		{
			tags: ["redux", "state"],
			url: "https://stackoverflow.com/questions/35836290/access-state-inside-of-mapdispatchtoprops-method",
		},
	]);
});
