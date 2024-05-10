import fs from "fs";
import { intro, outro, text, select } from "@clack/prompts";
import MagicString from "magic-string";
import program from "ast-query";
import scrapeIt from "scrape-it";

intro("Adding new item");
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

const url = await text({
	message: "Url",
});
const file = `./src/sources/${category}.js`;
const cont = fs.readFileSync(file, "utf8");
const prepared = new MagicString(cont);

const { status, data } = await scrapeIt(url, {
	title: "#content h1 a",
	desc: ".postlayout s-prose",
	tags: {
		listItem: ".post-taglist ul > li > a",
	},
});

if (status !== 200) {
	throw new Error(`The request was not succeeded: status code: ${status}`);
}

const expIndex = cont.indexOf("export default");
const expString = cont.slice(expIndex);
prepared.replace(/export.*/, "");
const tree = program(prepared.toString());

const links = tree.var("links");
links.value().push(`{
    url: "${url}",
    title: "${data.title}",
    tags: [${data.tags.map(el => `"${el}"`).join(",")}]
}`);
const toSave = new MagicString(tree.toString());
fs.writeFileSync(file, toSave.append(`\n\n${expString}`).toString());
outro(`New item with url: ${url} was added.`);
