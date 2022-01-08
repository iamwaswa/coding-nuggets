import { useCallback } from 'react';

type RenderListProps<DataType> = {
  items: Array<DataType>;
  renderNoContent?: JSX.Element | (() => JSX.Element);
  renderItem(
    item: DataType,
    index: number,
    items: Array<DataType>
  ): JSX.Element;
};

export function RenderList<DataType>({
  items,
  renderNoContent = <></>,
  renderItem,
}: RenderListProps<DataType>): JSX.Element | Array<JSX.Element> {
  const renderListItem = useCallback(
    (item: DataType, index: number, array: Array<DataType>): JSX.Element => {
      return renderItem(item, index, array);
    },
    [renderItem]
  );

  if (items.length === 0) {
    return typeof renderNoContent === `function`
      ? renderNoContent()
      : renderNoContent;
  }

  return items.map(renderListItem);
}
