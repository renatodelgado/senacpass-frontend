import { NavLink } from 'react-router-dom';
import {
  Container,
  Top,
  Logo,
  Search,
  Nav,
  MenuItem,
  Bottom,
} from './styles';

import {
  LayoutDashboard,
  Users,
  FileText,
  Cpu,
  Settings,
  Search as SearchIcon,
} from 'lucide-react';

export function Sidebar() {
  const menuItems = [
    { to: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { to: '/turmas', label: 'Turmas', icon: Users },
    { to: '/relatorios', label: 'Relatórios', icon: FileText },
    { to: '/iot', label: 'IoT', icon: Cpu },
  ];

  return (
    <Container>
      <Top>
        <Logo>SenacPass</Logo>

        <Search>
          <SearchIcon size={16} />
          <input placeholder="Buscar..." />
        </Search>

        <Nav>
          {menuItems.map(({ to, label, icon: Icon }) => (
            <MenuItem as={NavLink} key={to} to={to} end>
              <Icon size={18} />
              <span>{label}</span>
            </MenuItem>
          ))}
        </Nav>
      </Top>

      <Bottom>
        <MenuItem as={NavLink} to="/configuracoes" end>
          <Settings size={18} />
          <span>Configurações</span>
        </MenuItem>
      </Bottom>
    </Container>
  );
}