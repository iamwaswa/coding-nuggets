import { useEffect } from 'react';

/**
 * Removes server-side injected CSS
 */
export function useRemoveServerStyles(): void {
  useEffect(() => {
    const jssStyles = document.querySelector(`#jss-server-side`);

    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);
}
