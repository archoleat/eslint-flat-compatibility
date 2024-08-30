import { Override, Environments } from 'eslint-define-config';

/**  @return entire config */
declare const config: (object: Override) => any;

/**  @return mimic env */
declare const environments: (object: Environments) => any;

/** @return mimic extends */
declare const extend: (...array: string[]) => any;

/**  @return mimic plugins */
declare const plugins: (...array: string[]) => any;

export { config, environments as env, extend, plugins };
