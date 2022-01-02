import { ChangeEvent, ChangeEventHandler, useCallback } from 'react';

type ValidationSchema = {
  validateSync(value: unknown): unknown;
};

interface IUseRadioGroup
  extends Omit<
    ReturnType<typeof useFieldState>,
    'setFieldValue' | 'validateField'
  > {
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

/**
 * Manages the radio group state.
 * @param initialValue The initial value for the radio group
 * @param submitted The submitted status for the parent form
 * @param validationSchema The validation schema for the radio group
 * @returns The radio group state
 */
export function useRadioGroup(
  initialValue: string,
  submitted?: boolean,
  validationSchema?: ValidationSchema
): IUseRadioGroup {
  const {
    displayFieldError,
    fieldError,
    fieldValue,
    handleFieldTouched,
    setFieldValue,
    validateField,
  } = useFieldState(initialValue, submitted, validationSchema);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      let updatedFieldValue: string = ``;

      if (event.currentTarget.checked) {
        updatedFieldValue = event.currentTarget.value;
      }

      validateField(updatedFieldValue);

      setFieldValue(updatedFieldValue);
    },
    [setFieldValue, validateField]
  );

  return {
    displayFieldError,
    fieldError,
    fieldValue,
    handleChange,
    handleFieldTouched,
  };
}

function useFieldState(
  initialValue: string,
  submitted: boolean,
  validationSchema: any
): {
  displayFieldError: any;
  fieldError: any;
  fieldValue: any;
  handleFieldTouched: any;
  setFieldValue: any;
  validateField: any;
} {
  throw new Error(`Function not implemented.`);
}
