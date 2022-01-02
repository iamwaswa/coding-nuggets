import {
  Dispatch,
  SetStateAction,
  useCallback,
  useLayoutEffect,
  useState,
} from 'react';

type ValidationSchema<Value> = {
  validateSync(value: Value): unknown;
};

interface IUseFieldState<TFieldValue> {
  displayFieldError: boolean;
  fieldError: string | null;
  fieldTouched: boolean;
  fieldValue: TFieldValue;
  handleFieldTouched(): void;
  setFieldValue: Dispatch<SetStateAction<TFieldValue>>;
  validateField(value: TFieldValue): void;
}

/**
 * Manages the field state.
 * @param initialFieldValue The initial value for the field
 * @param submitted Whether the form containing the field was submitted
 * @param validationSchema The validation schema for the field
 * @returns The field state
 */
export function useFieldState<FieldValueType>(
  initialFieldValue: FieldValueType,
  submitted?: boolean,
  validationSchema?: ValidationSchema<FieldValueType>
): IUseFieldState<FieldValueType> {
  const [fieldTouched, { setTrue: handleFieldTouched }] = useBoolean();

  const [fieldError, setFieldError] = useState<string | null>(null);

  const [fieldValue, setFieldValue] = useState<FieldValueType>(
    initialFieldValue
  );

  const validateField = useCallback(
    (value: FieldValueType): void => {
      try {
        validationSchema?.validateSync(value);
        setFieldError(null);
      } catch (caughtError) {
        setFieldError((caughtError as Error).message);
      }
    },
    [validationSchema]
  );

  useLayoutEffect((): void => {
    if (submitted) {
      validateField(fieldValue);
    }
  }, [fieldValue, submitted, validateField]);

  return {
    displayFieldError: Boolean((submitted || fieldTouched) && fieldError),
    fieldError,
    fieldTouched,
    fieldValue,
    handleFieldTouched,
    setFieldValue,
    validateField,
  };
}

function useBoolean(): [any, { setTrue: any }] {
  throw new Error(`Function not implemented.`);
}
