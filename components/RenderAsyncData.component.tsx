import { PropsWithChildren } from 'react';

export interface IRenderAsyncDataProps<DataType> {
  data?: DataType;
  error: Error | null;
  loading: boolean;
  loadingStateDelay?: number;
  renderData(data: DataType): JSX.Element;
  renderLoading(): JSX.Element;
}

function RenderAsyncDataComponent<DataType>({
  data,
  error,
  loading,
  loadingStateDelay = 500,
  renderData,
  renderLoading,
}: IRenderAsyncDataProps<DataType>): JSX.Element {
  const showLoading = useDelayedTrueValue(loadingStateDelay);

  if (error) {
    throw error;
  }

  if (loading) {
    return showLoading ? renderLoading() : <></>;
  }

  return renderData(data);
}

function useDelayedTrueValue(delay: number): boolean {
  throw new Error(`Function not implemented.`);
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

function ErrorBoundary({}: PropsWithChildren<{}>): JSX.Element {
  throw new Error(`Component not implemented`);
}

export const RenderAsyncData = withErrorBoundary(RenderAsyncDataComponent);
