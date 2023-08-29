module.exports = async ({ github, context }) => {
  const {
    name,
    owner: { login },
  } = context.payload.repository;

  const { number } = context.payload;

  const commits = await github.rest.pulls.listCommits({
    owner: login,
    repo: name,
    pull_number: number,
  });

  console.log({ commits });
};
