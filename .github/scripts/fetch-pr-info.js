module.exports = ({ github, context }) => {
  const {
    name,
    owner: { login },
  } = context.payload.repository;

  const { number } = context.payload;

  const commits = github.rest.pulls.listCommits({
    repo: name,
    owner: login,
    pull_number: number,
  });

  console.log({ commits });
};
