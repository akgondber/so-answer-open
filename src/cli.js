import { intro, outro, text, select } from "@clack/prompts";
import Fuse from "fuse.js";
import open from "open";
import * as R from "ramda";

intro("Enter stackoverflow question details");

const category = await select({
	message: "Pick a category",
	options: [
		{ value: "js", label: "JavaScript" },
		{ value: "ts", label: "typescript " },
		{ value: "git", label: "git" },
		{ value: "c-sharp", label: "C#" },
		{ value: "ruby", label: "Ruby" },
	],
});

const subject = await text({
	message: "Subject",
});

const { default: links } = await import(`./sources/${category}.js`);

let quetionRegex = /https:\/\/stackoverflow.com\/questions\/\d+\/([^\/]+)+/g;

const questions = R.reject(
	R.isNil,
	R.map(item => {
		const matches = [...item.url.matchAll(quetionRegex)];
		if (!R.isEmpty(matches)) {
			return {
				sentence: R.path([0, 1], matches),
				url: item.url,
			};
		}
	}, links),
);

const fuse = new Fuse(R.pluck("sentence", questions), { includeScore: true });
const result = fuse.search(subject);

if (R.isEmpty(result)) {
	outro("The query have no close from the registered links");
} else {
	R.addIndex(R.map)(R.take(3, result));
	const sorted = R.sortWith([R.descend(R.prop("score"))])(result);
	const mostScoredLink = questions[sorted[0].refIndex].url;
	outro(`Opened the url ${mostScoredLink}`);
	await open(mostScoredLink);
}
