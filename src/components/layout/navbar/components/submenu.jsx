import styledComponents, { css } from "styled-components";

const Container = styledComponents.div`
`;

const BackgroundOpacity = styledComponents.div`
  position: fixed;
  z-index: 20;

  ${({ show }) => css`
    animation: ${show ? "fadeIn" : "fadeOut"} 0.8s;
    ${show &&
    css`
      background: rgba(0, 0, 0, 0.4);
      display: block;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    `}
    ${!show &&
    css`
      background: rgba(0, 0, 0, 0);
    `}
  `}

  @keyframes fadeIn {
    0% {
      background: rgba(0, 0, 0, 0);
    }
    100% {
      background: rgba(0, 0, 0, 0.4);
    }
  }

  @keyframes fadeOut {
    0% {
      background: rgba(0, 0, 0, 0.4);
    }
    100% {
      background: rgba(0, 0, 0, 0);
    }
  }
`;

const Submenu = ({ children, type, direction, ...props }) => {
  return (
    <Container effect={{ type, direction }} {...props}>
      {children}
    </Container>
  );
};

export default Submenu;
