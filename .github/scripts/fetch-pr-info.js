module.exports = ({ github }) => {
  const { commits } = github.event;
  console.log({ commits });
};
