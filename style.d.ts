import "styled-components";

declare module "styled-components" {
  export interface color {
    bodyText: string;
    background: string;
    background_light: string;
    primaryColor: string;
    gray: string;
    secondaryColor: string;
  }

  export interface DefaultTheme {
    colors: color;
  }
}
