import { CustomIconsProps } from '@/types/icons';

const HamburgerMenu: React.FC<CustomIconsProps> = ({ variant = 'solid', color, className, animation, ...props }) => {
  return (
    <svg
      id={props.name}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className={`${className} text-${color}`}
      {...props}
    >
      {
        variant === 'solid' && <>
          <path fill="none" d="M0 0H24V24H0z"></path>
          <g id="HamburgerIcon">
            <g id="afterAnimation" className={`transition-transform origin-center duration-500 ${animation ? 'scale-100 delay-1000' : 'scale-0'}`}>
              <g id="afterSecondaryLine">
                <g id="afterTopLeft">
                  <path
                    id="Rectangle_2"
                    d="M6.343 4.929H15.343V6.929H6.343z"
                    transform="rotate(45 6.343 4.929)"
                  ></path>
                  <circle
                    id="Ellipse_2"
                    cx="5.636"
                    cy="5.636"
                    r="1"
                    transform="rotate(45 5.636 5.636)"
                  ></circle>
                </g>
                <g id="afterBottomRight">
                  <path
                    id="Rectangle"
                    d="M12.707 11.293H21.707V13.293H12.707z"
                    transform="rotate(45 12.707 11.293)"
                  ></path>
                  <circle
                    id="Ellipse"
                    cx="18.364"
                    cy="18.364"
                    r="1"
                    transform="rotate(45 18.364 18.364)"
                  ></circle>
                </g>
              </g>
              <g id="afterPrimaryLine">
                <g id="afterTopright">
                  <path
                    id="Rectangle_3"
                    d="M11.293 11.293H20.293V13.293H11.293z"
                    transform="rotate(-45 11.293 11.293)"
                  ></path>
                  <circle
                    id="Ellipse_3"
                    cx="18.364"
                    cy="5.636"
                    r="1"
                    transform="rotate(-45 18.364 5.636)"
                  ></circle>
                </g>
                <g id="afterBottomLeft">
                  <path
                    id="Rectangle_4"
                    d="M4.929 17.657H13.929V19.657H4.929z"
                    transform="rotate(-45 4.929 17.657)"
                  ></path>
                  <circle
                    id="Ellipse_4"
                    cx="5.636"
                    cy="18.364"
                    r="1"
                    transform="rotate(-45 5.636 18.364)"
                  ></circle>
                </g>
              </g>
            </g>
            <g id="beforeAnimation" className={`transition-transform origin-center delay-500 duration-500 ${animation ? 'scale-x-0' : ''}`}>
              <g id="beforeFirstLine" className={`transition-transform origin-center ${animation ? 'translate-y-1/4' : 'delay-1000'} duration-500`}>
                <g id="beforeTopRight">
                  <path id="Rectangle_9" d="M12 5H20.570999999999998V7H12z"></path>
                  <ellipse
                    id="Ellipse_9"
                    cx="20.571"
                    cy="6"
                    rx="1.429"
                    ry="1"
                  ></ellipse>
                </g>
                <g id="beforeTopLeft">
                  <ellipse
                    id="Ellipse_10"
                    cx="3.429"
                    cy="6"
                    rx="1.429"
                    ry="1"
                  ></ellipse>
                  <path id="Rectangle_10" d="M3.429 5H12V7H3.429z"></path>
                </g>
              </g>
              <g id="beforeSecondLine">
                <g id="beforeCenterLeft">
                  <ellipse
                    id="Ellipse_8"
                    cx="3.429"
                    cy="12"
                    rx="1.429"
                    ry="1"
                  ></ellipse>
                  <path id="Rectangle_8" d="M3.429 11H12V13H3.429z"></path>
                </g>
                <g id="beforeCenterRight">
                  <ellipse
                    id="Ellipse_7"
                    cx="20.571"
                    cy="12"
                    rx="1.429"
                    ry="1"
                  ></ellipse>
                  <path
                    id="Rectangle_7"
                    d="M12 11H20.570999999999998V13H12z"
                  ></path>
                </g>
              </g>
              <g id="beforeThirdLine" className={`transition-transform origin-center ${animation ? '-translate-y-1/4' : 'delay-1000'} duration-500`}>
                <g id="beforeBottomRight">
                  <ellipse
                    id="Ellipse_5"
                    cx="20.571"
                    cy="18"
                    rx="1.429"
                    ry="1"
                  ></ellipse>
                  <path
                    id="Rectangle_5"
                    d="M12 17H20.570999999999998V19H12z"
                  ></path>
                </g>
                <g id="beforeBottomLeft">
                  <path id="Rectangle_6" d="M3.429 17H12V19H3.429z"></path>
                  <ellipse
                    id="Ellipse_6"
                    cx="3.429"
                    cy="18"
                    rx="1.429"
                    ry="1"
                  ></ellipse>
                </g>
              </g>
            </g>
          </g>
        </>
      }
    </svg>
  );
};

export default HamburgerMenu;
