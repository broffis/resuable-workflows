module.exports = async ({ github, context }) => {
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
  console.log({ commits });

  return commits;
};
