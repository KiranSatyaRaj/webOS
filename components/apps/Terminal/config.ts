import { type ITerminalOptions } from "xterm";

export const config: ITerminalOptions & { cols: number; rows: number } = {
  allowTransparency: true,
  cols: 80,
  cursorBlink: true,
  cursorStyle: "block",
  fontFamily: "'Fira Code', monospace",
  fontSize: 14,
  lineHeight: 1.2,
  rows: 24,
  scrollback: 5000,
  theme: {
    background: "#300a24",
    black: "#2e3436",
    blue: "#3465a4",
    brightBlack: "#555753",
    brightBlue: "#729fcf",
    brightCyan: "#34e2e2",
    brightGreen: "#8ae234",
    brightMagenta: "#ad7fa8",
    brightRed: "#ef2929",
    brightWhite: "#eeeeec",
    brightYellow: "#fce94f",
    cursor: "#ffffff",
    cursorAccent: "#300a24",
    cyan: "#06989a",
    foreground: "#ffffff",
    green: "#4e9a06",
    magenta: "#75507b",
    red: "#cc0000",
    white: "#d3d7cf",
    yellow: "#c4a000",
  },
};

export const WAPM_STD_IN_APPS = ["lolcat"];

export const WAPM_STD_IN_EXCLUDE_ARGS = ["--help", "-h", "--version", "-V"];

export const PROMPT_CHARACTER = ">";

export const PI_ASCII = [
  "     ':lodxkkkOOOOOOOOOOOOkkkkkl",
  "  .ckKNWMMMMMMMMMMMMMMMMMMMMMMMO",
  " .kWNK0OOKWMX0OOOOO0NMMMN000000d",
  ".dKo,.   cNWo      .xMMWo       ",
  ":x'      cWN:      .kMMWc       ",
  "..       dMK,      '0MMX;       ",
  "        .OMO.      ;XMM0,       ",
  "        cNMx.      cNMMk.       ",
  "       .OMMd       oMMMx.       ",
  "      .xWMWc      .xMMMd        ",
  "     .xWMMX;      .kMMMd        ",
  "    'OWMMMO.      '0MMMO.     :o",
  "   cKMMMMWo       '0MMMWk;..'l0c",
  "  ;XMMMMM0,        oWMMMMWXXNNd.",
  "  .kWMMW0;         .l0WMMMMNO:  ",
  "   .lkkl.            .cxkkd:.   ",
];

export const PRIMARY_NAME_SERVER = [
  "https://cloudflare-dns.com/dns-query",
  "1.1.1.1",
];
export const BACKUP_NAME_SERVER = ["https://dns.google/resolve", "8.8.8.8"];

export const LINUX_IMAGE_PATH = "/System/linux.bin";
