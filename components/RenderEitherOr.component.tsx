type Falsy = undefined | null | false | 0 | -0 | 0n | '';

type OrFalsy<T> = T | Falsy;

interface IRenderEitherOrProps<Condition> {
  ifTrue: OrFalsy<Condition>;
  thenRender: JSX.Element | ((condition: Condition) => JSX.Element);
  otherwiseRender?: JSX.Element | (() => JSX.Element);
}

export function RenderEitherOr<Condition>({
  ifTrue,
  thenRender,
  otherwiseRender = <></>,
}: IRenderEitherOrProps<Condition>): JSX.Element {
  if (ifTrue) {
    return typeof thenRender === `function` ? thenRender(ifTrue) : thenRender;
  }

  return typeof otherwiseRender === `function`
    ? otherwiseRender()
    : otherwiseRender;
}
