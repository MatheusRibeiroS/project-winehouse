import styledComponents from "styled-components";

const Head = styledComponents.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 10;
`;

export default function List({ children, visible, ...props }) {
  return visible ? <Head {...props}>{children}</Head> : null;
}
