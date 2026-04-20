const iconPaths = {
  github: (
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M12 2.25a9.75 9.75 0 0 0-3.08 19c.49.09.67-.21.67-.47v-1.72c-2.73.59-3.3-1.16-3.3-1.16-.45-1.13-1.1-1.43-1.1-1.43-.9-.61.07-.6.07-.6.99.07 1.51 1.02 1.51 1.02.88 1.5 2.3 1.07 2.86.82.09-.64.34-1.07.62-1.32-2.18-.25-4.47-1.09-4.47-4.84 0-1.07.38-1.94 1.01-2.62-.1-.25-.44-1.24.1-2.59 0 0 .83-.26 2.69 1a9.3 9.3 0 0 1 4.9 0c1.86-1.26 2.68-1 2.68-1 .54 1.35.2 2.34.1 2.59.63.68 1 1.55 1 2.62 0 3.76-2.29 4.59-4.48 4.83.35.3.67.9.67 1.82v2.58c0 .26.18.57.68.47A9.75 9.75 0 0 0 12 2.25Z"
      clipRule="evenodd"
    />
  ),
  linkedin: (
    <>
      <path d="M7.1 10.15v7.05" />
      <path d="M7.1 6.8v.02" />
      <path d="M10.9 17.2v-4.05c0-1.86 1.03-3 2.62-3 1.53 0 2.38.98 2.38 3.04v4.01" />
      <path d="M10.9 10.35v6.85" />
      <path d="M4.85 3.75h14.3c.6 0 1.1.49 1.1 1.1v14.3c0 .61-.5 1.1-1.1 1.1H4.85c-.61 0-1.1-.49-1.1-1.1V4.85c0-.61.49-1.1 1.1-1.1Z" />
    </>
  ),
  mail: (
    <>
      <path d="M4.75 6.75h14.5v10.5H4.75z" />
      <path d="m5 7 7 5.25L19 7" />
    </>
  ),
  code: (
    <>
      <path d="m9.25 8-4 4 4 4" />
      <path d="m14.75 8 4 4-4 4" />
    </>
  ),
  lightbulb: (
    <>
      <path d="M9 18h6" />
      <path d="M9.75 21h4.5" />
      <path d="M8.15 12.6a5.1 5.1 0 1 1 7.7 0c-.7.62-1.1 1.43-1.1 2.32V15h-5.5v-.08c0-.89-.4-1.7-1.1-2.32Z" />
    </>
  ),
  rocket: (
    <>
      <path d="M8.25 15.75 5.5 18.5" />
      <path d="M9.4 18.45c-1.8.68-3.62-.1-3.62-.1s-.78-1.82-.1-3.62" />
      <path d="M10.4 14.8 7.2 11.6c2.04-4.53 5.16-6.74 10.45-7.3-.56 5.3-2.77 8.42-7.25 10.5Z" />
      <path d="m14.85 6.35 2.8 2.8" />
    </>
  ),
  external: (
    <>
      <path d="M9.25 5.75h-3.5v12.5h12.5v-3.5" />
      <path d="M12.75 5.75h5.5v5.5" />
      <path d="m11.25 12.75 7-7" />
    </>
  ),
  location: (
    <>
      <path d="M18.25 10.15c0 4.6-6.25 9.85-6.25 9.85s-6.25-5.25-6.25-9.85a6.25 6.25 0 1 1 12.5 0Z" />
      <path d="M12 12.25a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2Z" />
    </>
  ),
  chevronDown: <path d="m6.75 9.75 5.25 5 5.25-5" />,
  menu: (
    <>
      <path d="M5 7h14" />
      <path d="M5 12h14" />
      <path d="M5 17h14" />
    </>
  ),
  close: (
    <>
      <path d="m7 7 10 10" />
      <path d="M17 7 7 17" />
    </>
  ),
}

function Icon({ name, size = 20, className = '', title }) {
  const isStrokeIcon = name !== 'github'

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden={title ? undefined : 'true'}
      role={title ? 'img' : undefined}
      fill={isStrokeIcon ? 'none' : undefined}
      stroke={isStrokeIcon ? 'currentColor' : undefined}
      strokeWidth={isStrokeIcon ? '1.9' : undefined}
      strokeLinecap={isStrokeIcon ? 'round' : undefined}
      strokeLinejoin={isStrokeIcon ? 'round' : undefined}
    >
      {title && <title>{title}</title>}
      {iconPaths[name]}
    </svg>
  )
}

export default Icon
