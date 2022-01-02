import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Manages the state of tabs.
 * @param tabs The tabs to use
 * @returns The tabs state
 */
export function useTabs<TabType>(
  tabs: Array<TabType>
): [TabType, Array<TabType>, (tab: TabType) => void] {
  const currentTabs = useRef<string>(JSON.stringify(tabs));

  const [currentTabValue, setCurrentTabValue] = useState<TabType>(tabs[0]);

  // * If the tabs have changed
  // * then reset the current tab value
  // * to the first tab
  useEffect((): void => {
    if (currentTabs.current !== JSON.stringify(tabs)) {
      setCurrentTabValue(tabs[0]);
    }
  }, [tabs]);

  const updateCurrentTabValue = useCallback(
    (newCurrentTabValue: TabType): void => {
      setCurrentTabValue(newCurrentTabValue);
    },
    []
  );

  return [currentTabValue, tabs, updateCurrentTabValue];
}
