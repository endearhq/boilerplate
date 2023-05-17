const githubChangelog = require("@changesets/changelog-github");

const changelogFunctions = {
  getReleaseLine:
    process.env.SNAPSHOT === "true"
      ? () => Promise.resolve("This is a snapshot release")
      : githubChangelog.default.getReleaseLine,
  getDependencyReleaseLine: () => Promise.resolve(""),
};

module.exports = changelogFunctions;
