export const FontFamilies = {
  POPPINS: {
    black: "PoppinsBlack",
    blackItalic: "PoppinsBlackItalic",
    bold: "PoppinsBold",
    extraBold: "PoppinsExtraBold",
    extraBoldItalic: "PoppinsExtraBoldItalic",
    light: "PoppinsLight",
    regular: "PoppinsRegular",
    medium: "PoppinsMedium",
    mediumItalic: "PoppinsMediumItalic",
    thin: "PoppinsThin",
    thinItalic: "PoppinsThinItalic",
    semibold: "PoppinsSemiBold",
    semiboldItalic: "PoppinsSemiBoldItalic",
  },
};

export type TFontType = keyof (typeof FontFamilies)["POPPINS"];
