import styled from "styled-components";
import ScrollBars from "styles/common/ScrollBars";

const StyledTerminal = styled.div`
  align-items: center;
  background-color: #282828;
  color: #ebdbb2;
  display: flex;
  font-family: "Fira Code", monospace;
  font-size: 14px;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  width: 100%;

  .terminal {
    background-color: #1d2021;
    border: 2px solid #3c3836;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 70%);
    height: 100%;
    overflow: hidden;
    padding: 10px;
    width: 100%;
  }

  .xterm-viewport {
    ${ScrollBars()};
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    padding: 10px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #665c54 #1d2021;
  }

  .xterm-cursor-underline {
    animation: cursor-blink 1s step-start infinite;
    border-bottom-color: #fabd2f !important;
    border-bottom-width: 2px !important;
    box-shadow: 0 0 6px #fabd2f;
  }

  @keyframes cursor-blink {
    50% {
      opacity: 0%;
    }
  }

  .xterm-screen {
    display: block;
    height: 100%;
    overflow: hidden;
  }

  .xterm-rows {
    color: #ebdbb2;
    font-size: 14px;
    line-height: 1.4;
    padding: 10px;
  }

  .xterm .xterm-helper-textarea {
    background: transparent;
    border: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    resize: none;
  }

  .xterm-selection {
    background-color: rgba(250, 189, 47, 30%);
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #665c54;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: #1d2021;
  }

  .xterm-rows span {
    color: #ebdbb2;
  }

  .xterm-rows span.command {
    color: #83a598;
  }

  .xterm-rows span.output {
    color: #d3869b;
  }
`;

export default StyledTerminal;
