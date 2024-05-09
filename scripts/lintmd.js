import { remark } from "remark";
import remarkPresetLintConsistent from "remark-preset-lint-consistent";
import remarkPresetLintRecommended from "remark-preset-lint-recommended";
import { read } from "to-vfile";
import { reporter } from "vfile-reporter";
import remarkLicense from "remark-license";

const file = await remark()
	.use(remarkLicense)
	.use(remarkPresetLintConsistent)
	.use(remarkPresetLintRecommended)
	.process(await read("./README.md"));
console.error(reporter(file));
