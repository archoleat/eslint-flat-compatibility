import{resolve as n}from"node:path";import{FlatCompat as t}from"@eslint/eslintrc";const e=new t({baseDirectory:n(),resolvePluginsRelativeTo:n()}),s=o=>e.config(o),i=o=>e.env(o),r=(...o)=>e.extends(...o),c=(...o)=>e.plugins(...o);export{s as config,i as env,r as extend,c as plugins};