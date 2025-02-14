import { getGitTags } from "../getGitTags";

// @__NO_SIDE_EFFECTS__
export async function getLastGitTag(delta = 0) {
  const tags = await getGitTags();
  return tags[tags.length + delta - 1];
}
