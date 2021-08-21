function User({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 172 172"
    >
      <g
        fill="none"
        strokeMiterlimit={10}
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{
          mixBlendMode: "normal",
        }}
      >
        <path d="M0 172V0h172v172z" fill="#fff" />
        <path
          d="M86 28.667c-15.845 0-28.667 12.821-28.667 28.666S70.155 86 86 86c15.845 0 28.667-12.822 28.667-28.667 0-15.845-12.822-28.666-28.667-28.666zM64.724 96.078c-27.071 8.203-36.057 30.458-36.057 30.458v16.797h114.666v-16.797s-8.986-22.255-36.057-30.458C105.792 106.52 96.834 114.667 86 114.667s-19.792-8.147-21.276-18.589z"
          fill="#b2b2b2"
        />
      </g>
    </svg>
  );
}

export default User;
