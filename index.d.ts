import * as eslint from 'eslint';
import { Override, Environments } from 'eslint-define-config';

/**  @return entire config */
declare const config: (object: Override) => eslint.Linter.FlatConfig<eslint.Linter.RulesRecord>[];

/**  @return mimic env */
declare const environments: (object: Environments) => eslint.Linter.FlatConfig<eslint.Linter.RulesRecord>[];

/** @return mimic extends */
declare const extend: (...array: string[]) => eslint.Linter.FlatConfig<eslint.Linter.RulesRecord>[];

/**  @return mimic plugins */
declare const plugins: (...array: string[]) => eslint.Linter.FlatConfig<eslint.Linter.RulesRecord>[];

export { config, environments as env, extend, plugins };
