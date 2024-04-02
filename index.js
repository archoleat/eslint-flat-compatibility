import{resolve as e}from"node:path";import{FlatCompat as t}from"@eslint/eslintrc";const r=(...o)=>new t({baseDirectory:e(),resolvePluginsRelativeTo:e()}).extends(...o);export{r as compatibility};
