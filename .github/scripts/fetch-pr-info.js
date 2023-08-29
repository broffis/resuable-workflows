module.exports = async ({ github, context, core }) => {
  const {
    name,
    owner: { login },
  } = context.payload.repository;

  const { number } = context.payload;

  const { data } = await github.rest.pulls.listCommits({
    owner: login,
    repo: name,
    pull_number: number,
  });

  const commits = data.map((c) => ({ sha: c.sha, message: c.commit.message }));

  core.setOutput("commits", JSON.stringify(commits));
};
