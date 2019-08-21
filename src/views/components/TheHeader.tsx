import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { FunctionComponent, useState } from 'react';
import { Box, Button } from 'grommet';

type MenuButtonProps = {
  children: string;
  onClick: () => void;
  active: boolean;
};
const MenuButton: FunctionComponent<MenuButtonProps> = ({ children, ...rest }) => {
  return (
    <Button hoverIndicator="light-4" plain {...rest}>
      <Box pad={{ horizontal: 'medium', vertical: 'medium' }}>{children}</Box>
    </Button>
  );
};

type Props = {} & RouteComponentProps;
const TheHeader: FunctionComponent<Props> = ({ history }) => {
  const [active, setActive] = useState();

  const menu = [
    { path: '/', name: 'Home' },
    { path: '/repository', name: 'Repository' },
    { path: '/toggleStar', name: 'Toggle Star' },
  ];
  return (
    <header>
      <Box direction="row" background="light-2">
        {menu.map(({ path, name }) => (
          <MenuButton
            key={name}
            active={name === active}
            onClick={() => {
              setActive(name);
              history.push(path);
            }}>
            {name}
          </MenuButton>
        ))}
      </Box>
    </header>
  );
};

export default withRouter(TheHeader);
