import styled, { keyframes, css } from 'styled-components';
import { darken } from 'polished';
import { GoogleLogin } from 'react-google-login';

interface FormInputIsErrored {
  hasError: boolean;
}

const mobileViewPort = '640px';
const tabletViewPort = '768px';
const largeTabletViewPort = '1024px';

const defaultPercentSize = '100%';
const maxWidth = '300px';
const imgAsideWidth = '32vw';
const responsiveWidth = '50%';
const carouselImgWidth = '75%';
const pageHeight = '100vh';
const afterContentHeight = '1px';
const headerHeight = '100px';

const contentPadding = '2vw 7vw 4vw';
const defaultVerticalPaddingSize = '10px';
const defaultHorizontalPaddingSize = '20px';
const googleBtnPadding = '3px 15px 0';

const tabletResponsivePadding = '10vw 7vw 0';
const tabletResponsiveFontSize = '15px';
const tabletInputResponsiveFontSize = '15px';
const tabletResponsiveImgWidth = '90%';
const tabletPFontSize = '18px';
const tabletResponsiveMarginBottom = '25px';
const mobileResponsiveImgSize = '45%';
const mobileResponsivePSize = '16px';

const defaultSizeVerticalMargin = '20px';
const littleMarginSize = '5px';
const mediumMarginSize = '10px';

const commonBorderStyle = '1px solid';

const hoverTransition = '0.25s ease-in-out';
const containerMaxWidth = '700px';
const initialOpacity = '0.85';
const finishOpacity = '1';

const btnWidth = '175px';
const btnHeight = '40px';
const btnBorderRadius = '20px';
const sphericalBorderRadius = '20px';
const btnFontSize = '14px';
const dotsSize = '12px';

const paragraphMaxWidth = '400px';
const sliderMaxWidth = '500px';
const fontWeightLight = '300';
const titleFontSize = '22px';
const secondaryFontSize = '12px';
const principalFontSize = '14px';

const backgroundTheme = '#FFF';
const principalColor = '#707070';
const tertiaryColor = '#BDBDBD';
const auxiliarColor = '#000';
const textColor = '#FFF';
const auxiliarLinkColor = '#A9C5BA';
const errorColor = '#E53935';
const asideBackgroundColor = '#A9C5BA';

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: stretch;

  height: ${pageHeight};

  @media (max-width: ${tabletViewPort}) {
    flex-direction: column;
  }
`;

export const Content = styled.main`
  width: ${defaultPercentSize};
  padding: ${contentPadding};
  max-width: ${containerMaxWidth};

  color: ${principalColor};

  @media (max-width: ${tabletViewPort}) {
    padding: ${tabletResponsivePadding};
    height: ${pageHeight};
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-height: ${defaultPercentSize};

  animation: ${appearFromRight} 1s;

  @media (max-width: ${tabletViewPort}) {
    height: ${defaultPercentSize};
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: ${defaultPercentSize};
  height: ${headerHeight};
  margin-bottom: ${defaultSizeVerticalMargin};

  h1 {
    font-weight: ${fontWeightLight};
    font-size: ${titleFontSize};
  }

  div {
    display: flex;
    justify-content: flex-end;

    width: ${defaultPercentSize};
    color: ${auxiliarColor};
  }
`;

export const Form = styled.form`
  width: ${maxWidth};
  display: flex;
  flex-direction: column;
  margin-bottom: ${littleMarginSize};

  a {
    margin: ${littleMarginSize};

    font-size: ${principalFontSize};
    color: ${principalColor};

    text-align: right;
    text-decoration: none;

    transition: color ${hoverTransition};

    &:hover {
      color: ${darken(0.15, principalColor)};
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: ${defaultSizeVerticalMargin};
    margin-bottom: ${defaultSizeVerticalMargin};

    button {
      width: ${btnWidth};
      height: ${btnHeight};

      border: none;
      border-radius: ${btnBorderRadius};
      background: ${principalColor};

      font-size: ${btnFontSize};
      color: ${textColor};

      transition: background ${hoverTransition};

      &:hover {
        background: ${darken(0.15, principalColor)};
      }
    }
  }
`;

export const FormInput = styled.label<FormInputIsErrored>`
  display: flex;
  flex-direction: column;

  font-size: ${secondaryFontSize};
  margin-bottom: ${littleMarginSize};

  input {
    padding: ${defaultVerticalPaddingSize};

    font-size: ${principalFontSize};
    border: none;
    border-bottom: ${commonBorderStyle} ${tertiaryColor};

    ${props =>
      props.hasError &&
      css`
        border-bottom: ${commonBorderStyle} ${errorColor};
      `}
  }

  span {
    display: block;
    margin: ${littleMarginSize};
    color: ${errorColor};

    ${props =>
      !props.hasError &&
      css`
        display: none;
      `}
  }

  @media (max-width: ${tabletViewPort}) {
    font-size: ${tabletResponsiveFontSize};

    input {
      font-size: ${tabletInputResponsiveFontSize};
    }
  }
`;

export const AsideContent = styled.aside`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  background-color: ${asideBackgroundColor};
  width: calc(${defaultPercentSize} - ${containerMaxWidth});
  padding: ${defaultVerticalPaddingSize} ${defaultHorizontalPaddingSize};

  font-weight: ${fontWeightLight};

  div.slider-container {
    width: ${defaultPercentSize};
    max-width: ${sliderMaxWidth};
  }

  div.carousel-item {
    display: flex !important;
    flex-direction: column;
    align-items: center;

    img {
      width: ${imgAsideWidth};
      height: auto;
    }

    div {
      color: ${textColor};
      text-align: center;

      h4 {
        margin-top: ${mediumMarginSize};
        margin-bottom: ${mediumMarginSize};

        font-size: ${titleFontSize};
        font-weight: ${fontWeightLight};
      }

      p {
        padding-left: ${defaultVerticalPaddingSize};
        margin-bottom: ${mediumMarginSize};
        max-width: ${paragraphMaxWidth};
      }
    }
  }

  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: ${backgroundTheme};
    width: 22px;
    border-radius: 20px;

    transition: width 0.35s ease-in-out;
  }

  .slick-dots li button:before {
    content: '';
    width: ${dotsSize};
    height: ${dotsSize};
    border-radius: ${sphericalBorderRadius};
    opacity: 0.5;
    background-color: ${backgroundTheme};
  }

  @media (max-width: ${largeTabletViewPort}) {
    width: ${responsiveWidth};

    div.carousel-item {
      img {
        width: ${carouselImgWidth};
      }
    }
  }

  @media (max-width: ${tabletViewPort}) {
    width: ${defaultPercentSize};
    height: ${pageHeight};

    div.slider-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: ${defaultPercentSize};
    }

    div.carousel-item {
      img {
        width: ${tabletResponsiveImgWidth};
        margin-bottom: ${tabletResponsiveMarginBottom};
      }

      div {
        margin-bottom: ${defaultVerticalPaddingSize};

        p {
          font-size: ${tabletPFontSize};
        }
      }
    }
  }

  @media (max-width: ${mobileViewPort}) and (orientation: landscape) {
    div.carousel-item {
      img {
        width: ${mobileResponsiveImgSize};
        margin-bottom: ${littleMarginSize};
      }

      div {
        p {
          font-size: ${mobileResponsivePSize};
          margin-bottom: 0;
        }
      }
    }
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: ${maxWidth};

  p {
    position: relative;

    width: ${defaultPercentSize};
    margin-bottom: ${mediumMarginSize};

    text-align: center;
    font-size: ${principalFontSize};
    color: ${principalColor};

    span {
      padding-left: ${defaultHorizontalPaddingSize};
      padding-right: ${defaultHorizontalPaddingSize};
      background: ${backgroundTheme};
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: calc(${principalFontSize} / 2);

      width: ${defaultPercentSize};
      height: ${afterContentHeight};
      z-index: -1;

      background-color: ${tertiaryColor};
    }
  }

  div.create_account {
    margin-bottom: ${defaultSizeVerticalMargin};
    margin-top: ${defaultSizeVerticalMargin};
    text-align: center;

    span {
      display: block;
      color: ${principalColor};
      font-size: ${principalFontSize};
      margin-bottom: ${mediumMarginSize};
    }

    a {
      color: ${auxiliarLinkColor};
      transition: color ${hoverTransition};

      &:hover {
        color: ${darken(0.15, auxiliarLinkColor)};
      }
    }
  }
`;

export const LoginWithGoogle = styled(GoogleLogin)`
  height: ${btnHeight};
  padding: ${googleBtnPadding} !important;
  border-radius: ${btnBorderRadius} !important;
  opacity: ${initialOpacity} !important;

  transition: opacity ${hoverTransition};

  div {
    background: none !important;
  }

  &:hover {
    opacity: ${finishOpacity} !important;
  }
`;
