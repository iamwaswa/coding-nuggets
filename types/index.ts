export type APIResponse<TData = undefined> = ErrorHandledAPIResponse<TData> & {
  error?: string;
};

export type ArrayElement<TArrayType> = TArrayType extends Array<
  infer ElementType
>
  ? ElementType
  : never;

export type DecorateType<
  TOriginal extends Record<string, unknown>,
  TRemove extends string,
  TAdd
> = Omit<TOriginal, TRemove> & TAdd;

export type ErrorHandledAPIResponse<TData = undefined> = {
  data: TData;
  success?: string;
};

export type ExtendType<
  TOriginal extends Record<string, unknown>,
  TExtension extends Record<string, unknown>
> = TOriginal & TExtension;

export type NullableRecord<T extends Record<string, unknown>> = {
  [P in keyof T]: T[P] | null;
};

type Falsy = undefined | null | false | 0 | -0 | 0n | '';

export type IsTruthy<T> = T extends Falsy ? never : T;

export type OrFalsy<T> = T | Falsy;

export type OrUndefined<T> = T | undefined;

export type OrNull<T> = T | null;

export type WithId<T> = T & { id: string };
