const theme = {
  colors: {
    primaryText: "var(--primaryText)", // dark gray - modern primary text
    secondaryText: "var(--secondaryText)", // muted gray - secondary text
    background: "var(--background)", // light gray - app background
    surface: "var(--surface)", // white - card/panel surface
    border: "var(--border)", // light gray - border lines

    primary: "var(--primary)", // blue - primary buttons/accents
    primaryHover: "var(--primary-hover)", // darker blue - hover state

    secondary: "var(--secondary)", // gray - secondary buttons
    secondaryHover: "var(--secondary-hover)", // darker gray - hover

    success: "var(--success)", // green - success messages
    warning: "var(--warning)", // yellow - warning messages
    danger: "var(--danger)", // red - danger/delete
    dangerHover: "var(--danger-hover)", // darker red - hover

    link: "var(--primary)", // link color (uses primary)
    linkHover: "var(--primary-hover)", // link hover color

    disabledBg: "var(--button-disabled-bg)", // gray - disabled button background
    disabledText: "var(--button-disabled-text)", // muted text - disabled text
  },
  button: {
    paddingY: "var(--button-padding-y)", // vertical padding
    paddingX: "var(--button-padding-x)", // horizontal padding
    radius: "var(--button-radius)", // border-radius
    fontWeight: "var(--button-font-weight)", // font-weight
  },
};

export type Theme = typeof theme;

export default theme;
