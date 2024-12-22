import styled from "styled-components";
import ScrollBars from "styles/common/ScrollBars";

const StyledTerminal = styled.div`
  background-color: #000;
  border-radius: 12px; /* Increased border-radius */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 30%);
  color: #fff;
  display: flex;
  flex-direction: column;
  font-family: "Ubuntu Mono", monospace;
  font-size: 14px;
  height: 100%;
  overflow: hidden;
  position: relative;
  width: 100%;

  /* Title bar styling */
  .title-bar {
    align-items: center;
    background-color: #2b2b2b;
    border-radius: 12px 12px 0 0; /* Updated border-radius */
    display: grid;
    grid-template-columns: 1fr auto;
    height: 36px;
    position: relative;
    z-index: 2;
  }

  .title-text {
    color: #fff;
    font-size: 14px;
    font-weight: normal;
    left: 0;
    pointer-events: none;
    position: absolute;
    text-align: center;
    width: 100%;
  }

  .window-controls {
    display: flex;
    gap: 8px;
    margin-right: 12px;
    z-index: 1;
  }

  .window-control {
    align-items: center;
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    display: flex;
    font-size: 18px;
    height: 16px;
    justify-content: center;
    opacity: 80%;
    padding: 0;
    width: 16px;

    &:hover {
      opacity: 100%;
    }

    &.minimize {
      font-size: 20px;
    }

    &.maximize {
      font-size: 14px;
    }

    &.close {
      color: #ff5f57;
      font-size: 16px;

      &:hover {
        background-color: #ff5f57;
        border-radius: 50%;
        color: #fff;
      }
    }
  }

  .terminal {
    background-color: #000;
    border-radius: 0 0 12px 12px; /* Updated border-radius */
    flex: 1;
    overflow: hidden;
    padding: 12px;
    position: relative;
    z-index: 1;
  }

  .xterm-viewport {
    ${ScrollBars()};
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-right: 10px;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 20%);
    border-radius: 5px;

    &:hover {
      background-color: rgba(255, 255, 255, 30%);
    }
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  /* Rest of the terminal content styling */
  .xterm-rows {
    color: #fff;
    font-size: 14px;
    line-height: 1.5;
  }
`;

export default StyledTerminal;
