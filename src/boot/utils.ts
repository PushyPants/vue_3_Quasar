import { boot } from 'quasar/wrappers';
import * as utils from '../utils';

export default boot(({ app }) => {
  const defaultUtils = utils.default;
  app.config.globalProperties.$utils = defaultUtils;

  app.provide('$utils', defaultUtils);
});

export { utils };
