import './App.css';

import Body from './Body';
import Header from './Header';
import useToggleConversionsPanel from './hooks/useToggleConverterPanel';

function App() {
  const { showConversionsPanel, handleConversionsPanel } =
    useToggleConversionsPanel(false);

  return (
    <div className="app-body">
      <div className="panel-wrapper">
        <Header handleConversionsPanel={handleConversionsPanel} />
        {showConversionsPanel && <Body />}
      </div>
    </div>
  );
}

export default App;
