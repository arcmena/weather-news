import styled, { css } from 'styled-components'

const Elipsis = styled.div(
  ({ theme: { colors } }) => css`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 20px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & div {
      position: absolute;
      width: 9px;
      height: 9px;
      border-radius: 50%;
      background: ${colors.dark};
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }
    & div:nth-child(1) {
      left: 8px;
      animation: lds-ellipsis1 0.6s infinite;
    }
    & div:nth-child(2) {
      left: 8px;
      animation: lds-ellipsis2 0.6s infinite;
    }
    & div:nth-child(3) {
      left: 32px;
      animation: lds-ellipsis2 0.6s infinite;
    }
    & div:nth-child(4) {
      left: 56px;
      animation: lds-ellipsis3 0.6s infinite;
    }
    @keyframes lds-ellipsis1 {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
    @keyframes lds-ellipsis2 {
      0% {
        transform: translate(0, 0);
      }
      100% {
        transform: translate(24px, 0);
      }
    }
    @keyframes lds-ellipsis3 {
      0% {
        transform: scale(1);
      }
      100% {
        transform: scale(0);
      }
    }
  `
)

export default function Loader() {
  return (
    <Elipsis data-testid="loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Elipsis>
  )
}
