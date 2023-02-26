const breakpoints = {
    large: '87.49em',
    medium: '62.49em',
} as const;

type BreakPoint = keyof typeof breakpoints;

export const mediaMax = (breakpoint: BreakPoint) => `@media (max-width: ${breakpoints[breakpoint]})`;
export const mediaMin = (breakpoint: BreakPoint) => `@media (min-width: ${breakpoints[breakpoint]})`;
export const mediaBetween = (firstBreakpoint: BreakPoint, secondBreakpoint: BreakPoint) =>
    `@media (min-width: ${breakpoints[firstBreakpoint]}) and (max-width: ${breakpoints[secondBreakpoint]})`;
