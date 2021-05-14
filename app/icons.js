// Open All files in ./icons
// Get content -> first line delete width / height
// transform structure into function  like this --->

/**
 * import { Icontype } from './Type'

function SvgLoaderIcon(props: Icontype): JSX.Element {
  return (
    <svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g transform="translate(1 1)" strokeWidth={2} fill="none" fillRule="evenodd">
        <circle strokeOpacity=".5" cx={18} cy={18} r={18} />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 18 18"
            to="360 18 18"
            dur="1s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  )
}

export default SvgLoaderIcon

 */

// Paste it into ./components/Icons