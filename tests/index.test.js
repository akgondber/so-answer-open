import { expect, test } from "vitest";

const dupUrls = (items) => {
  const counted = items.reduce((acc, item) => {
    acc[item.url] ||= 0;
    acc[item.url]++;
    return acc;
  }, {});
  return Object.keys(counted).filter(item => counted[item] > 1);
};

test("does not have duplicate urls", async () => {
	const categories = ["git", "c-sharp", "js", "ruby", "ts"];
	const hasDuplicateUrls = list =>
		[...new Set(list.map(item => item.url))].length < list.length;

	for (const category of categories) {
		const { default: links } = await import(`/src/sources/${category}.js`);

		expect(links).toBeDefined();
		expect(links).not.toSatisfy(hasDuplicateUrls, `The '${category}' category have duplicate urls: ${dupUrls(links)}.`);
	}
});
