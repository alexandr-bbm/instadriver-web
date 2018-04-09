import {AxiosError} from 'axios';
import {SubmissionError} from 'redux-form';
import {get, capitalize} from 'lodash';

const DEFAULT_ERROR_MESSAGE = 'Something went wrong. Please try again or later.';

export const handleAsyncFormError = (result: AxiosError) => {
  const fieldMessages = get(result, 'response.data.error.details.messages');
  if (fieldMessages) {
    throw new SubmissionError(fieldMessages);
  }
  const genericMessage = get(result, 'response.data.error.message');

  const fallbackMessage = genericMessage || result.message || DEFAULT_ERROR_MESSAGE;

  throw new SubmissionError({_error: capitalize(fallbackMessage)});
};
