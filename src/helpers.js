const buildItems = (items, additionalTag) =>
	items.map(item => ({
		url: typeof item === "object" ? item.url : item,
		tags:
			typeof item === "object"
				? [...(item.tags || []), additionalTag]
				: [additionalTag],
	}));

export { buildItems };
