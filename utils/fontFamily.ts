import { FontFamilies, TFontType } from "@/constants/fonts";

export const getFontFamily = (
  // isLTR: boolean,
  type: TFontType
) => {
  // todo: when we added RTL support
  // const selectedFontFamily = isLTR
  //   ? FontFamilies.MONTSERRAT
  //   : fontFamilies.RUBIK;
  // return selectedFontFamily[weight];
  return FontFamilies.POPPINS[type];
};
