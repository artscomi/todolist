export const rawMq = {
  tabPort: "(min-width: 37.5em)",
  tabLand: "(min-width: 56.25em)",
  desktop: "(min-width: 75em)",
  bigDesktop: "(min-width: 112.5em)",
};

export const mq = {
  tabPort: `@media${rawMq.tabPort}`,
  tabLand: `@media${rawMq.tabLand}`,
  desktop: `@media${rawMq.desktop}`,
  bigDesktop: `@media${rawMq.bigDesktop}`,
};
