import { ReactNode } from 'react';

type OrNull<Type> = Type | null;

type OrUndefined<Type> = Type | undefined;

export interface IRenderAsyncDataProps<DataType> {
  data: OrUndefined<DataType>;
  error: OrNull<Error>;
  loading: boolean;
  loadingStateDelay?: number;
  renderData(data: DataType): JSX.Element;
  renderLoading(): JSX.Element;
  renderNoData?: ReactNode | (() => JSX.Element);
}

function RenderAsyncDataComponent<DataType>({
  data,
  error,
  loading,
  loadingStateDelay = 500,
  renderData,
  renderLoading,
  renderNoData = <></>,
}: IRenderAsyncDataProps<DataType>): JSX.Element {
  const showLoading = useDelayedTrueValue(loadingStateDelay);

  if (error) {
    throw error;
  }

  if (loading) {
    return showLoading ? renderLoading() : <></>;
  }

  if (!data) {
    return typeof renderNoData === `function` ? renderNoData() : renderNoData;
  }

  return renderData(data);
}

function useDelayedTrueValue(delay: number){
  throw new Error(`Use delayed true value is not implemented!`);
}

function withErrorBoundary<DataType>(
  Component: (props: IRenderAsyncDataProps<DataType>) => JSX.Element
): (props: IRenderAsyncDataProps<DataType>) => JSX.Element {
  return (props: IRenderAsyncDataProps<DataType>): JSX.Element => {
    return (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}

function ErrorBoundary(){
  throw new Error(`Error Boundary component is not implemented`);
}

export const RenderAsyncData = withErrorBoundary(RenderAsyncDataComponent);
