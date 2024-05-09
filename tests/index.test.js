import { expect, test } from "vitest";

test("does not have duplicate urls", async () => {
	const categories = ["git", "c-sharp", "js", "ruby", "ts"];
	const hasDuplicateUrls = list =>
		[...new Set(list.map(item => item.url))].length < list.length;

	for (const category of categories) {
		const { default: links } = await import(`/src/sources/${category}.js`);

		expect(links).toBeDefined();
		expect(links).not.toSatisfy(hasDuplicateUrls);
	}
});
