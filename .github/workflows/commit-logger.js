const fs = require("fs");

const commits = JSON.parse(process.env.GITHUB_EVENT_PATH).commits;

const file = "log/commit/commit-log.txt";

commits.forEach((commit) => {
  const message = `*$new commit
- commit message:
${commit.message}
- commit url: ${commit.url}
- commit id: ${commit.id}
- commit time: ${commit.timestamp}
`;
  fs.readFileSync(file, message, "utf8");
});

console.log("commit saving done");
