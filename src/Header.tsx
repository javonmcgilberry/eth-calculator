import React, { HTMLProps } from 'react';
import Button from './Button';

interface IHeader extends HTMLProps<HTMLDivElement> {
  handleConversionsPanel: (isVisible: boolean) => void;
}

const Header = React.memo(({ handleConversionsPanel }: IHeader) => {
  return (
    <header className="header">
      <Button
        className="c-button"
        onClick={() => handleConversionsPanel(true)}
        text="show panel"
      />
      <Button
        className="c-button"
        onClick={() => handleConversionsPanel(false)}
        text="hide panel"
      />
    </header>
  );
});

export default Header;
