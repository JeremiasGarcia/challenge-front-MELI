export const BreadCrumb = ({ categories }) => {
  return <p>{categories && categories.join(" > ")}</p>;
};
