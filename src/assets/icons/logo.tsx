// types
import type { ComponentPropsWithoutRef } from 'react';

export interface ILogo extends ComponentPropsWithoutRef<'svg'> {
  color?: string;
  strikecolor?: string;
}

function Logo({ color = 'black', strikecolor = "white", ...rest }: ILogo): JSX.Element {
  return (
    <svg viewBox="0 0 498 254" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <g filter="url(#filter0_d_115_16)">
        <path d="M58.016 211L63.2 177.88L183.008 45.112H84.512L90.272 7.95996H243.488L238.304 40.792L118.784 173.848H221.888L216.128 211H58.016Z" fill={strikecolor} />
        <path d="M242.979 211L275.235 7.95996H310.66L358.755 133.528L447.172 7.95996H485.475L453.22 211H412.9L432.483 86.584L365.956 180.472H341.188L302.883 87.448L283.299 211H242.979Z" fill={strikecolor} />
        <path d="M54.5581 210.459L53.9256 214.5H58.016H216.128H219.127L219.587 211.536L225.347 174.384L225.972 170.348H221.888H126.633L240.908 43.1309L241.6 42.3606L241.761 41.3378L246.945 8.50583L247.584 4.45996H243.488H90.272H87.2728L86.8133 7.42373L81.0533 44.5757L80.4275 48.612H84.512H175.135L60.6015 175.535L59.9033 176.309L59.7421 177.339L54.5581 210.459ZM239.523 210.451L238.88 214.5H242.979H283.299H286.288L286.756 211.548L304.39 100.299L337.951 181.805L338.844 183.972H341.188H365.956H367.765L368.811 182.496L426.704 100.795L409.442 210.456L408.805 214.5H412.9H453.22H456.207L456.676 211.549L488.932 8.5091L489.575 4.45996H485.475H447.172H445.355L444.31 5.94492L359.675 126.143L313.928 6.70806L313.067 4.45996H310.66H275.235H272.248L271.779 7.41082L239.523 210.451Z" stroke={strikecolor} strokeWidth="7" />
      </g>
      <g filter="url(#filter1_d_115_16)">
        <path d="M13.016 239L18.2 205.88L138.008 73.112H39.512L45.272 35.96H198.488L193.304 68.792L73.784 201.848H176.888L171.128 239H13.016Z" fill={color} />
        <path d="M197.979 239L230.235 35.96H265.66L313.755 161.528L402.172 35.96H440.475L408.22 239H367.9L387.483 114.584L320.956 208.472H296.188L257.883 115.448L238.299 239H197.979Z" fill={color} />
        <path d="M9.55809 238.459L8.92555 242.5H13.016H171.128H174.127L174.587 239.536L180.347 202.384L180.972 198.348H176.888H81.6326L195.908 71.1309L196.6 70.3606L196.761 69.3378L201.945 36.5058L202.584 32.46H198.488H45.272H42.2728L41.8133 35.4237L36.0533 72.5757L35.4275 76.612H39.512H130.135L15.6015 203.535L14.9033 204.309L14.7421 205.339L9.55809 238.459ZM194.523 238.451L193.88 242.5H197.979H238.299H241.288L241.756 239.548L259.39 128.299L292.951 209.805L293.844 211.972H296.188H320.956H322.765L323.811 210.496L381.704 128.795L364.442 238.456L363.805 242.5H367.9H408.22H411.207L411.676 239.549L443.932 36.5091L444.575 32.46H440.475H402.172H400.355L399.31 33.9449L314.675 154.143L268.928 34.7081L268.067 32.46H265.66H230.235H227.248L226.779 35.4108L194.523 238.451Z" stroke={strikecolor} strokeWidth="7" />
      </g>
      <defs>
        <filter id="filter0_d_115_16" x="45.8351" y="0.959961" width="451.84" height="225.04" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_115_16" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_115_16" result="shape" />
        </filter>
        <filter id="filter1_d_115_16" x="0.835083" y="28.96" width="451.84" height="225.04" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_115_16" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_115_16" result="shape" />
        </filter>
      </defs>
    </svg>
  );
}

export default Logo;
