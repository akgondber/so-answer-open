const items = [
	"https://stackoverflow.com/questions/58858782/using-the-dynamic-import-function-on-node-js",
	"https://stackoverflow.com/questions/10005939/how-do-i-consume-the-json-post-data-in-an-express-application",
];

const links = items.map(item => ({
	url: item,
	tags: ["node"],
}));

export const lit = links;

export default links;
