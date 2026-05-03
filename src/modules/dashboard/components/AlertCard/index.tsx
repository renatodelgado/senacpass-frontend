import { Container } from './styles'; 
import { AlertTriangle, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  type: string;
}

export function AlertCard({ title, description, type }: Props) {
  const Icon = type === 'danger' ? AlertTriangle : type === 'warning' ? ShieldAlert : CheckCircle2;

  return (
    <Container type={type}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
        <div style={{ width: 26, height: 26, borderRadius: 999, background: 'rgba(255,255,255,0.75)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'inherit' }}>
          <Icon size={15} />
        </div>

        <div>
          <div style={{ fontWeight: 700, marginBottom: 3, fontSize: '0.82rem', lineHeight: 1.2 }}>{title}</div>
          <div style={{ fontSize: '0.76rem', opacity: 0.85, lineHeight: 1.35 }}>{description}</div>
        </div>
      </div>
    </Container>
  );
}