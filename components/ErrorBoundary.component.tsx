import { Component, ErrorInfo, ReactNode } from 'react';

interface IErrorBoundaryProps {
  children: React.ReactNode;
  renderError(error: Error): JSX.Element;
}

interface IErrorBoundaryState {
  error: Error | null;
}

export class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): IErrorBoundaryState {
    // * The object returned here will update state
    // * so that in the next render cycle the error
    // * will be present in state.
    return { error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error(error);
    console.log(errorInfo.componentStack);
  }

  render(): ReactNode {
    if (this.state.error) {
      return this.props.renderError(this.state.error);
    }

    return this.props.children;
  }
}
