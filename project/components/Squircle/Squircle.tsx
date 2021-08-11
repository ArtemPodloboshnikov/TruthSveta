import * as React from 'react';
import {ResizeObserver} from '@juggle/resize-observer';
import useMeasure from 'react-use-measure';

const Preset = {
    iOS: {
      ratio1: 0.0586,
      ratio2: 0.332
    },
    KakaoTalk: {
      ratio1: 0.14,
      ratio2: 0.5
    }
};

function calcSquirclePath(
    width: number,
    height: number,
    ratio1: number,
    ratio2: number
  ) {
    ratio1 = Math.min(ratio1, ratio2);
    return `M 0,${ratio2}
  C 0,${ratio1} ${ratio1},0 ${ratio2},0
  L ${width - ratio2},0
  C ${width - ratio1},0 ${width},${ratio1} ${width},${ratio2}
  L ${width},${height - ratio2}
  C ${width},${height - ratio1} ${width - ratio1},${height} ${
      width - ratio2
    },${height}
  L ${ratio2},${height}
  C ${ratio1},${height} 0,${height - ratio1} 0,${height - ratio2}
  L 0,${ratio2}`;
  }
  
function getSquirclePathAsDataUri(
    width: number,
    height: number,
    ratio1: number,
    ratio2: number
  ) {
    const id = `se-${width}-${height}-${ratio1}-${ratio2}`;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs><clipPath id="${id}"><path fill="#000" d="${calcSquirclePath(
      width,
      height,
      ratio1,
      ratio2
    )}"/></clipPath></defs>
  <g clip-path="url(#${id})"><rect width="${width}" height="${height}" fill="#000"/></g></svg>`;
  
    return {id, svg, dataUri: svg2DataUri(svg)};
  }
  
function svg2DataUri(data: string) {
    return `data:image/svg+xml,${data
      .replace(/"/g, "'")
      .replace(/>\s+</g, '><')
      .replace(/\s{2,}/g, ' ')
      .replace(/[\r\n%#()<>?[\\\]^`{|}]/g, encodeURIComponent)}`;
}

interface Bounds {
  readonly width: number;
  readonly height: number;
}

export function getMaskStyle(
  bounds: Bounds,
  props: SquircleProps
): React.CSSProperties {
  const width = bounds.width;
  const height = bounds.height;
  const {
    ratio1 = Preset.iOS.ratio1,
    ratio2 = Preset.iOS.ratio2,
    pixelRatio1,
    pixelRatio2
  } = props;
  const {dataUri} = getSquirclePathAsDataUri(
    width,
    height,
    pixelRatio1 !== undefined ? pixelRatio1 : ratio1 * Math.min(width, height),
    pixelRatio2 !== undefined ? pixelRatio2 : ratio2 * Math.min(width, height)
  );
  return {
    maskImage: `url("${dataUri}")`,
    maskPosition: 'center',
    maskRepeat: 'no-repeat',
    // maskSize: 'contain',
    WebkitMaskImage: `url("${dataUri}")`,
    WebkitMaskPosition: 'center',
    WebkitMaskRepeat: 'no-repeat'
    // WebkitMaskSize: 'contain'
  };
}

export interface SquircleImgProps {
  width: number;
  height: number;
  href: string | undefined;
  style?: React.CSSProperties;
  ratio1?: number;
  ratio2?: number;
  backgroundColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
}

export const SquircleImg = (props: SquircleImgProps) => {
  const width = props.width;
  const height = props.height;
  const {ratio1 = Preset.iOS.ratio1, ratio2 = Preset.iOS.ratio2} = props;
  const {
    strokeWidth = 0,
    strokeColor = 'rgba(255,255,255,0.5)',
    backgroundColor
  } = props;
  const path = calcSquirclePath(
    width,
    height,
    ratio1 * Math.min(width, height),
    ratio2 * Math.min(width, height)
  );
  const id = `squircle-${width}-${height}-${ratio1}-${ratio2}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={props.style}
    >
      <defs>
        <clipPath id={id}>
          <path fill="#000" stroke="none" d={path} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id})`}>
        {backgroundColor && (
          <rect width={width} height={height} fill={backgroundColor} />
        )}
        {props.href && (
          <image
            href={props.href}
            width={width}
            height={height}
            preserveAspectRatio="none"
          />
        )}
        {strokeWidth > 0 && (
          <path
            stroke={strokeColor}
            strokeWidth={strokeWidth * 2}
            fill="none"
            d={path}
          />
        )}
      </g>
    </svg>
  );
};

export interface SquircleProps {
  ratio1?: number;
  ratio2?: number;
  pixelRatio1?: number;
  pixelRatio2?: number;
  children: React.ReactNode;
}

const Squircle = (
  props: SquircleProps & React.HTMLAttributes<HTMLDivElement>
) => {
  const [ref, bounds] = useMeasure({polyfill: ResizeObserver});

  return (
    <div
      {...props}
      ref={ref}
      style={{
        ...props.style,
        ...getMaskStyle(bounds, props)
      }}
    >
      {props.children}
    </div>
  );
};

export default Squircle;