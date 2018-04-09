import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import AddIcon from 'material-ui-icons/Add';
import { Title } from '../../../_atoms/_material/title/title';
import { Inline } from '../../../_atoms/inline/inline';
import { InputField } from '../../../_atoms/_material/inputField/inputField';
import { required } from '../../../../utils/form/validations';

const MINIMUM_OPTIONS_NUM = 2;

export const PollOptionsFields = ({ fields }) => {
  return (
    <div>
      <Inline>
        <Title>Options</Title>
        <IconButton onClick={() => fields.push({})}>
          <AddIcon />
        </IconButton>
      </Inline>
      {fields.map((pollOption, idx) => {
        const displayIdx = idx + 1;
        return (
          <Inline growFirst key={idx} rootStyle={{alignItems: 'baseline'}}>
            <InputField
              name={`${pollOption}.title`}
              label={`Option ${displayIdx}`}
              key={idx}
              validate={required}
            />
            {displayIdx > MINIMUM_OPTIONS_NUM && (
              <IconButton onClick={() => fields.remove(idx)}>
                <DeleteIcon />
              </IconButton>
            )}
          </Inline>
        );
      })}
    </div>
  );
};
