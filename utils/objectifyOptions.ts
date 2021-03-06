import { FormOption, ObjectifiableFormOption } from '~shared/data';

const objectifyOptions = (options: ObjectifiableFormOption[]): FormOption[] =>
  options.map(option => {
    if (typeof option !== 'string') {
      return option;
    }
    return {
      label: option,
      value: option,
    };
  });

export default objectifyOptions;
