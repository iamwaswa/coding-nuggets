type Falsy = undefined | null | false | 0 | -0 | 0n | '';

type OrFalsy<T> = T | Falsy;

interface IRenderConditionallyProps<ConditionValue> {
  condition: OrFalsy<ConditionValue>;
  renderComponent:
    | JSX.Element
    | ((conditionValue: ConditionValue) => JSX.Element);
  otherwiseRenderComponent?: JSX.Element | (() => JSX.Element);
}

export function RenderConditionally<ConditionValue>({
  condition,
  renderComponent,
  otherwiseRenderComponent = () => <></>,
}: IRenderConditionallyProps<ConditionValue>): JSX.Element {
  if (condition) {
    return typeof renderComponent === `function`
      ? renderComponent(condition)
      : renderComponent;
  }

  return typeof otherwiseRenderComponent === `function`
    ? otherwiseRenderComponent()
    : otherwiseRenderComponent;
}
