import type { PaletteOptions} from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import { common, grey, blueGrey, lightBlue } from '@mui/material/colors';
import type { ThemeOptions, TypeAction } from '@mui/material';

const primary = {
  ...lightBlue,
  contrastText: common.white,
  light: '#48b9ff',
  main: '#2baeff',
  dark: '#2495db',
};

const secondary = {
  main: blueGrey[600],
  dark: blueGrey[900],
};

const accent = {
  greenLight: '#4CAF50',
  greenMain: '#5EB761',
  greenDark: '#357A37',
  orangeLight: '#FF9800',
  orangeMain: '#FFA21A',
  orangeDark: '#B36A00',
  redLight: '#EF6A6A',
  redMain: '#F07F7F',
  redDark: '#A64E4E',
};

const background = { default: '#121921', paper: '#1c252a' };

const text = {
  primary: alpha(common.white, .87),
  secondary: 'rgba(144, 150, 151, 0.87)',
  disabled: alpha(common.white, .38),
  delete: accent.redDark,
  hint: alpha(common.black, .38),
};

const action: TypeAction = {
  active: alpha(common.white, .60),
  hover: alpha(common.white, .8),
  hoverOpacity: 0.08,
  selected: '#124362',
  selectedOpacity: 0.08,
  disabled: alpha(common.white, .38),
  disabledBackground: alpha(common.white, .14),
  disabledOpacity: 0.08,
  focus: alpha(common.white, .38),
  focusOpacity: 0.08,
  activatedOpacity: 0.08,
};

const palette: PaletteOptions = {
  mode: 'dark',
  tonalOffset: 0.2,
  contrastThreshold: 3,
  success: { main: accent.greenMain, light: accent.greenLight, dark: accent.greenDark },
  warning: { main: accent.orangeMain, light: accent.orangeLight, dark: accent.orangeDark },
  error: { main: accent.redMain, dark: accent.redDark, light: accent.redLight },
  info: { main: primary.main },
  divider: alpha(common.white, .14),
  primary,
  secondary,
  common,
  grey,
  text,
  background,
  action,
};

export const themeOptions: ThemeOptions = {
  palette,
};

export default themeOptions;
