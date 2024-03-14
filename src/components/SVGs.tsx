import {memo} from 'react';

interface SVGProps extends React.SVGAttributes<HTMLOrSVGElement> {
  width?: number;
  height?: number;
}

export const ProfileIcon = memo(function ({width, height, ...props}: SVGProps) {
  return (
    <svg
      width={width || 16}
      height={height || 21}
      viewBox='0 0 16 21'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8 0C5.23858 0 3 2.23858 3 5C3 7.76142 5.23858 10 8 10C10.7614 10 13 7.76142 13 5C13 2.23858 10.7614 0 8 0ZM5 5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5C11 6.65685 9.65685 8 8 8C6.34315 8 5 6.65685 5 5Z'
        fill='#98A2B3'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M8 21C6.4595 21 4.22982 20.6502 2.55543 19.9174C1.73343 19.5576 0.897452 19.0427 0.411753 18.2974C0.156317 17.9054 -0.00516667 17.4437 0.000126279 16.9282C0.00537077 16.4174 0.173439 15.9281 0.455915 15.4728C1.82532 13.2656 4.62679 11 8 11C11.3732 11 14.1747 13.2656 15.5441 15.4728C15.8266 15.9281 15.9946 16.4174 15.9999 16.9282C16.0052 17.4437 15.8437 17.9054 15.5882 18.2974C15.1025 19.0427 14.2666 19.5576 13.4446 19.9174C11.7702 20.6502 9.5405 21 8 21ZM2.15539 16.5272C2.02372 16.7394 2.00077 16.8757 2.00002 16.9487C1.99932 17.017 2.01686 17.0973 2.08736 17.2055C2.25354 17.4605 2.65707 17.7787 3.35732 18.0852C4.72744 18.6848 6.67324 19 8 19C9.32676 19 11.2726 18.6848 12.6427 18.0852C13.3429 17.7787 13.7465 17.4605 13.9126 17.2055C13.9831 17.0973 14.0007 17.017 14 16.9487C13.9992 16.8757 13.9763 16.7394 13.8446 16.5272C12.7225 14.7185 10.4843 13 8 13C5.51566 13 3.27754 14.7185 2.15539 16.5272Z'
        fill='#98A2B3'
      />
    </svg>
  );
});

export const NavCloseIcon = memo(function ({...props}: SVGProps) {
  return (
    <svg
      width='20'
      height='20'
      viewBox='0 0 14 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M7.71094 7L13.1016 12.3984L12.3984 13.1016L7 7.71094L1.60156 13.1016L0.898438 12.3984L6.28906 7L0.898438 1.60156L1.60156 0.898438L7 6.28906L12.3984 0.898438L13.1016 1.60156L7.71094 7Z'
        fill='#AAAAAA'
      />
    </svg>
  );
});

export const BrandIcon = memo(function ({width, height, ...props}: SVGProps) {
  return (
    <svg
      width={width || 27}
      height={height || 25}
      viewBox='0 0 27 25'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M26.8007 13.4819H23.0967C23.029 13.0026 22.8909 12.577 22.6823 12.2049C22.4737 11.8272 22.2059 11.5058 21.8789 11.2408C21.5519 10.9759 21.1742 10.7729 20.7457 10.632C20.3229 10.491 19.8634 10.4205 19.3673 10.4205C18.4709 10.4205 17.6901 10.6432 17.0248 11.0886C16.3596 11.5284 15.8437 12.1711 15.4772 13.0167C15.1108 13.8568 14.9276 14.8772 14.9276 16.078C14.9276 17.3127 15.1108 18.3501 15.4772 19.1901C15.8493 20.0301 16.368 20.6644 17.0333 21.0928C17.6985 21.5213 18.4681 21.7356 19.3419 21.7356C19.8324 21.7356 20.2863 21.6707 20.7035 21.541C21.1263 21.4114 21.5012 21.2225 21.8282 20.9745C22.1552 20.7208 22.4258 20.4135 22.64 20.0527C22.8599 19.6919 23.0121 19.2803 23.0967 18.818L26.8007 18.8349C26.7049 19.6298 26.4653 20.3966 26.0819 21.1351C25.7042 21.868 25.1939 22.5248 24.5512 23.1055C23.9142 23.6806 23.1531 24.1372 22.2679 24.4755C21.3885 24.8081 20.3934 24.9745 19.2827 24.9745C17.738 24.9745 16.3567 24.6249 15.139 23.9258C13.9269 23.2267 12.9684 22.2148 12.2637 20.8899C11.5646 19.565 11.2151 17.9611 11.2151 16.078C11.2151 14.1894 11.5703 12.5826 12.2806 11.2578C12.991 9.93287 13.955 8.92371 15.1728 8.23027C16.3906 7.53118 17.7605 7.18164 19.2827 7.18164C20.2863 7.18164 21.2165 7.32259 22.0734 7.60447C22.936 7.88636 23.6999 8.29792 24.3652 8.83915C25.0305 9.37473 25.5717 10.0315 25.9889 10.8095C26.4117 11.5876 26.6823 12.4783 26.8007 13.4819Z'
        fill='black'
      />
      <path
        d='M0.953491 3.73973V0.720703H15.1776V3.73973H9.87527V18.0399H6.25582V3.73973H0.953491Z'
        fill='black'
      />
    </svg>
  );
});

export const Spinner = memo(function () {
  return (
    <svg
      aria-hidden='true'
      className='w-6 h-6 text-gray-600 animate-spin fill-gray-400 mx-auto'
      viewBox='0 0 100 101'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
        fill='currentColor'
      />
      <path
        d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
        fill='currentFill'
      />
    </svg>
  );
});

interface HashIconProps extends SVGProps {
  black?: boolean;
}

export const HashIcon = memo(function ({black}: HashIconProps) {
  return (
    <svg
      width='14'
      height='14'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4.0002 16.7535L6.5002 1.75349M11.5002 16.7535L14.0002 1.75349M2.33354 5.92016L16.5002 5.92016M1.50018 12.5868L15.6668 12.5868'
        stroke={black ? '#101928' : 'white'}
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
});

export const MenuIcon = memo(function ({...props}: SVGProps) {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <line
        x1='2.05713'
        y1='6.79285'
        x2='22.2171'
        y2='6.79285'
        stroke='black'
        strokeWidth='1.5'
      />
      <line
        x1='2.05713'
        y1='11.5929'
        x2='22.2171'
        y2='11.5929'
        stroke='black'
        strokeWidth='1.5'
      />
      <line
        x1='2.05713'
        y1='16.3928'
        x2='22.2171'
        y2='16.3928'
        stroke='black'
        strokeWidth='1.5'
      />
    </svg>
  );
});

interface CubeIconProps extends HashIconProps {}

export const Cube = memo(function ({black}: CubeIconProps) {
  return (
    <svg
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M7.99992 1.3335C7.68227 1.3335 7.36853 1.40363 7.08111 1.53888L2.86446 3.52319C1.92981 3.96302 1.33325 4.90307 1.33325 5.93604V10.6668C1.33325 11.332 1.7174 11.9373 2.31927 12.2206L7.08111 14.4614C7.36853 14.5967 7.68227 14.6668 7.99992 14.6668C8.31757 14.6668 8.63131 14.5967 8.91872 14.4614L13.6806 12.2206C14.2824 11.9373 14.6666 11.332 14.6666 10.6668V5.93604C14.6666 4.90308 14.07 3.96302 13.1354 3.52319L8.91872 1.53888C8.63131 1.40363 8.31757 1.3335 7.99992 1.3335ZM13.3333 9.58814L8.66659 7.25481V2.89382L12.5676 4.72962C13.035 4.94953 13.3333 5.41956 13.3333 5.93604V9.58814ZM7.99992 8.41219L13.1561 10.9903C13.1423 10.9991 13.1279 11.0071 13.1128 11.0141L8.35099 13.255C8.24117 13.3067 8.12129 13.3335 7.99992 13.3335C7.87854 13.3335 7.75867 13.3067 7.64884 13.255L2.887 11.0141C2.87195 11.0071 2.85751 10.9991 2.84373 10.9903L7.99992 8.41219ZM7.33325 7.25481L2.66659 9.58814V5.93604C2.66659 5.41956 2.96487 4.94953 3.43219 4.72962L7.33325 2.89382V7.25481Z'
        fill={black ? 'black' : 'white'}
      />
    </svg>
  );
});

export const ArrowRightIcon = memo(function ({}: SVGProps) {
  return (
    <svg
      width='8'
      height='14'
      viewBox='0 0 8 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M6.97129 7.31442L7 7.2857L6.71429 6.99999L6.68557 7.0287L1.28571 1.62883L1 1.91455L6.39986 7.31442L1 12.7143L1.28571 13L6.68557 7.60013L6.71429 7.62884L7 7.34313L6.97129 7.31442Z'
        fill='#606060'
        stroke='black'
      />
    </svg>
  );
});