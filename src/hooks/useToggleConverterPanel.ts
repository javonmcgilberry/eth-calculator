import React from 'react';

const useToggleConversionsPanel = (initialCondition: boolean) => {
  const [showConversionsPanel, setShowConversionsPanel] =
    React.useState(initialCondition);
  const handleConversionsPanel = React.useCallback((isVisible: boolean) => {
    setShowConversionsPanel(isVisible);
  }, []);

  return { showConversionsPanel, handleConversionsPanel };
};

export default useToggleConversionsPanel;
