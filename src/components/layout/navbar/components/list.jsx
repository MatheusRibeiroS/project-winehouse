import styledComponents from "styled-components";

const Head = styledComponents.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 10;
`;

export default function List({ children, ...props }) {
  return <Head {...props}>{children}</Head>;
}
