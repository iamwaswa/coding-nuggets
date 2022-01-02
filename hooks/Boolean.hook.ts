import { useMemo, useState } from 'react';

export interface IUseBooleanActions {
  setFalse(): void;
  setTrue(): void;
  setValue(value: boolean): void;
  toggleBoolean(): void;
}

/**
 * Manages the boolean state.
 * @returns The boolean state
 */
export function useBoolean(
  initialValue?: boolean
): [boolean, IUseBooleanActions] {
  const [boolean, setBoolean] = useState<boolean>(Boolean(initialValue));

  const actions = useMemo((): IUseBooleanActions => {
    return {
      setFalse(): void {
        setBoolean(false);
      },
      setTrue(): void {
        setBoolean(true);
      },
      setValue(value: boolean): void {
        setBoolean(value);
      },
      toggleBoolean(): void {
        setBoolean(currentBoolean => !currentBoolean);
      },
    };
  }, []);

  return [boolean, actions];
}
