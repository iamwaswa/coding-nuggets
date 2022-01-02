type RenderListProps<TData> = {
  items: Array<TData>;
  renderNoContent?: () => JSX.Element;
  renderItem(item: TData, index: number, items: Array<TData>): JSX.Element;
};

export function RenderList<TData>({
  items,
  renderNoContent,
  renderItem,
}: RenderListProps<TData>): JSX.Element {
  function renderListItem(
    item: TData,
    index: number,
    array: Array<TData>
  ): JSX.Element | null {
    return renderItem(item, index, array);
  }

  if (items.length === 0 && renderNoContent) {
    return renderNoContent();
  }

  if (items.length === 0) {
    return <></>;
  }

  return <>{items.map(renderListItem)}</>;
}
