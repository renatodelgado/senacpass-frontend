import type { FormEvent } from 'react';
import {
  AlertTriangle,
  CheckCircle2,
  LockKeyhole,
  Loader2,
  Paperclip,
  RotateCcw,
  Shuffle,
  SquarePen,
  Unlock,
  UserRound,
  X,
} from 'lucide-react';
import {
  ModalOverlay,
  ModalCard,
  ModalHeader,
  ModalTitleBlock,
  ModalEyebrow,
  ModalTitle,
  ModalDescription,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalPrimaryButton,
  ModalSecondaryButton,
  StatusBanner,
  StatusBadge,
  Spinner,
  FormGrid,
  Field,
  FieldLabel,
  FormControl,
  SelectControl,
  TextAreaControl,
  HelperText,
  PreviewList,
  PreviewChip,
} from '../../styles';

export type DashboardModalKind =
  | 'none'
  | 'restart-sensor'
  | 'force-sync'
  | 'close-checkin'
  | 'reopen-manual'
  | 'start-process';

export type ModalPhase = 'idle' | 'running';

interface StudentOption {
  id: string;
  name: string;
}

interface DashboardModalProps {
  activeModal: DashboardModalKind;
  modalPhase: ModalPhase;
  selectedStudentId: string;
  justification: string;
  attachmentName: string;
  studentOptions: StudentOption[];
  onClose: () => void;
  onSelectedStudentIdChange: (studentId: string) => void;
  onJustificationChange: (justification: string) => void;
  onAttachmentNameChange: (attachmentName: string) => void;
  onProcessSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onRestartConfirm: () => void;
  onSyncConfirm: () => void;
  onCloseCheckinConfirm: () => void;
  onReopenManualConfirm: () => void;
}

const ATTACHMENT_PLACEHOLDER = 'Nenhum anexo selecionado';

export function DashboardModal({
  activeModal,
  modalPhase,
  selectedStudentId,
  justification,
  attachmentName,
  studentOptions,
  onClose,
  onSelectedStudentIdChange,
  onJustificationChange,
  onAttachmentNameChange,
  onProcessSubmit,
  onRestartConfirm,
  onSyncConfirm,
  onCloseCheckinConfirm,
  onReopenManualConfirm,
}: DashboardModalProps) {
  if (activeModal === 'none') {
    return null;
  }

  const modalCopy = {
    'restart-sensor': {
      eyebrow: 'Ação provisória',
      title: 'Reiniciar sensor',
      description:
        'O sensor da sala será reiniciado com uma animação curta. Nenhuma alteração permanente será feita nesta etapa.',
      icon: <RotateCcw size={22} />,
      tone: 'info' as const,
      primaryLabel: 'Reiniciar agora',
      secondaryLabel: 'Cancelar',
      body: (
        <StatusBanner tone="info">
          <StatusBadge tone="info">
            <RotateCcw size={20} />
          </StatusBadge>

          <div style={{ display: 'grid', gap: 6 }}>
            <strong style={{ color: '#1f2937' }}>Reinício em andamento</strong>
            <span style={{ color: '#6b7280', lineHeight: 1.55 }}>
              Esta janela simula o reinício do sensor. Assim que a animação terminar,
              o painel volta ao estado normal.
            </span>
          </div>
        </StatusBanner>
      ),
      onConfirm: onRestartConfirm,
    },
    'force-sync': {
      eyebrow: 'Ação provisória',
      title: 'Forçar sincronia',
      description:
        'Ajuste provisório para simular a reconexão e atualizar o módulo inteiro depois da execução.',
      icon: <Shuffle size={22} />,
      tone: 'info' as const,
      primaryLabel: 'Sincronizar e atualizar',
      secondaryLabel: 'Cancelar',
      body: (
        <StatusBanner tone="info">
          <StatusBadge tone="info">
            <Loader2 size={20} />
          </StatusBadge>

          <div style={{ display: 'grid', gap: 6 }}>
            <strong style={{ color: '#1f2937' }}>Sincronização ativa</strong>
            <span style={{ color: '#6b7280', lineHeight: 1.55 }}>
              Quando confirmar, a tela exibirá a animação de sincronia e o dashboard
              será recarregado ao final.
            </span>
          </div>
        </StatusBanner>
      ),
      onConfirm: onSyncConfirm,
    },
    'close-checkin': {
      eyebrow: 'Confirmação necessária',
      title: 'Encerrar check-in',
      description:
        'Tem certeza? Ao confirmar, novas marcações de entrada serão bloqueadas para esta aula.',
      icon: <LockKeyhole size={22} />,
      tone: 'danger' as const,
      primaryLabel: 'Sim, encerrar',
      secondaryLabel: 'Voltar',
      body: (
        <StatusBanner tone="danger">
          <StatusBadge tone="danger">
            <AlertTriangle size={20} />
          </StatusBadge>

          <div style={{ display: 'grid', gap: 6 }}>
            <strong style={{ color: '#991b1b' }}>O que vai acontecer</strong>
            <span style={{ color: '#7f1d1d', lineHeight: 1.55 }}>
              O check-in ficará travado, os alunos que ainda não marcaram presença
              continuarão pendentes e a operação passará a ser somente leitura.
            </span>
          </div>
        </StatusBanner>
      ),
      onConfirm: onCloseCheckinConfirm,
    },
    'reopen-manual': {
      eyebrow: 'Confirmação necessária',
      title: 'Reabrir manual',
      description:
        'Tem certeza? Ao confirmar, o check-in manual volta a ficar disponível para ajustes da turma.',
      icon: <Unlock size={22} />,
      tone: 'success' as const,
      primaryLabel: 'Reabrir agora',
      secondaryLabel: 'Cancelar',
      body: (
        <StatusBanner tone="success">
          <StatusBadge tone="success">
            <CheckCircle2 size={20} />
          </StatusBadge>

          <div style={{ display: 'grid', gap: 6 }}>
            <strong style={{ color: '#065f46' }}>Operação manual liberada</strong>
            <span style={{ color: '#047857', lineHeight: 1.55 }}>
              Se você confirmar, o módulo volta a permitir ajustes manuais de
              frequência e validação de registros.
            </span>
          </div>
        </StatusBanner>
      ),
      onConfirm: onReopenManualConfirm,
    },
  } as const;

  const isStartProcessModal = activeModal === 'start-process';

  const activeCopy =
    activeModal === 'restart-sensor'
      ? modalCopy['restart-sensor']
      : activeModal === 'force-sync'
      ? modalCopy['force-sync']
      : activeModal === 'close-checkin'
      ? modalCopy['close-checkin']
      : activeModal === 'reopen-manual'
      ? modalCopy['reopen-manual']
      : null;

  const modalHeaderCopy =
    isStartProcessModal
      ? {
          eyebrow: 'Fluxo provisório',
          title: 'Iniciar processo',
          description:
            'Abra um registro manual para justificar ausência com dados básicos e anexo.',
        }
      : activeCopy;

  if (!modalHeaderCopy) {
    return null;
  }

  return (
    <ModalOverlay onClick={onClose} role="presentation">
      <ModalCard
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dashboard-modal-title"
      >
        <ModalHeader>
          <ModalTitleBlock>
            <ModalEyebrow>{modalHeaderCopy.eyebrow}</ModalEyebrow>
            <ModalTitle id="dashboard-modal-title">{modalHeaderCopy.title}</ModalTitle>
            <ModalDescription>{modalHeaderCopy.description}</ModalDescription>
          </ModalTitleBlock>

          <ModalCloseButton
            type="button"
            onClick={onClose}
            aria-label="Fechar modal"
            disabled={modalPhase === 'running'}
          >
            <X size={16} />
          </ModalCloseButton>
        </ModalHeader>

        {isStartProcessModal ? (
          <form onSubmit={onProcessSubmit}>
            <ModalBody>
              <StatusBanner tone="info">
                <StatusBadge tone="info">
                  <SquarePen size={20} />
                </StatusBadge>

                <div style={{ display: 'grid', gap: 6 }}>
                  <strong style={{ color: '#1f2937' }}>
                    Justificativa manual provisória
                  </strong>
                  <span style={{ color: '#6b7280', lineHeight: 1.55 }}>
                    Preencha um aluno, anexe um arquivo e descreva o motivo. Esta tela
                    ainda é provisória e não envia dados reais.
                  </span>
                </div>
              </StatusBanner>

              <FormGrid>
                <Field>
                  <FieldLabel>Aluno</FieldLabel>
                  <SelectControl
                    value={selectedStudentId}
                    onChange={(event) => onSelectedStudentIdChange(event.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Selecione um aluno
                    </option>
                    {studentOptions.map((student) => (
                      <option key={student.id} value={student.id}>
                        {student.name}
                      </option>
                    ))}
                  </SelectControl>
                </Field>

                <Field>
                  <FieldLabel>Anexo</FieldLabel>
                  <FormControl
                    type="file"
                    onChange={(event) =>
                      onAttachmentNameChange(event.target.files?.[0]?.name ?? '')
                    }
                  />
                  <HelperText>
                    {attachmentName || ATTACHMENT_PLACEHOLDER}
                  </HelperText>
                </Field>

                <Field>
                  <FieldLabel>Justificativa</FieldLabel>
                  <TextAreaControl
                    placeholder="Explique o motivo da justificativa..."
                    value={justification}
                    onChange={(event) => onJustificationChange(event.target.value)}
                    required
                  />
                </Field>

                <div>
                  <FieldLabel style={{ display: 'block', marginBottom: 8 }}>
                    Prévia da seleção
                  </FieldLabel>
                  <PreviewList>
                    {selectedStudentId ? (
                      <PreviewChip>
                        <UserRound size={14} style={{ marginRight: 6 }} />
                        {
                          studentOptions.find(
                            (student) => student.id === selectedStudentId,
                          )?.name
                        }
                      </PreviewChip>
                    ) : null}
                    {attachmentName ? (
                      <PreviewChip>
                        <Paperclip size={14} style={{ marginRight: 6 }} />
                        {attachmentName}
                      </PreviewChip>
                    ) : null}
                  </PreviewList>
                </div>
              </FormGrid>
            </ModalBody>

            <ModalFooter>
              <ModalSecondaryButton
                type="button"
                onClick={onClose}
                disabled={modalPhase === 'running'}
              >
                Cancelar
              </ModalSecondaryButton>
              <ModalPrimaryButton type="submit" disabled={modalPhase === 'running'}>
                {modalPhase === 'running' ? 'Enviando...' : 'Iniciar processo'}
              </ModalPrimaryButton>
            </ModalFooter>
          </form>
        ) : (
          <>
            <ModalBody>
              {activeCopy?.body}

              <StatusBanner tone={activeCopy?.tone}>
                <StatusBadge tone={activeCopy?.tone}>
                  {modalPhase === 'running' ? <Spinner /> : activeCopy?.icon}
                </StatusBadge>

                <div style={{ display: 'grid', gap: 6 }}>
                  <strong style={{ color: '#1f2937' }}>
                    {modalPhase === 'running'
                      ? activeModal === 'force-sync'
                        ? 'Sincronizando módulos'
                        : activeModal === 'restart-sensor'
                        ? 'Reiniciando sensor'
                        : activeModal === 'close-checkin'
                        ? 'Encerrando check-in'
                        : 'Reabrindo manualmente'
                      : activeModal === 'force-sync'
                      ? 'Pronto para sincronizar'
                      : activeModal === 'restart-sensor'
                      ? 'Pronto para reiniciar'
                      : activeModal === 'close-checkin'
                      ? 'Confirmação final antes de encerrar'
                      : 'Confirmação final antes de reabrir'}
                  </strong>
                  <span style={{ color: '#6b7280', lineHeight: 1.55 }}>
                    {modalPhase === 'running'
                      ? activeModal === 'force-sync'
                        ? 'Ajustando os estados provisórios e recarregando o dashboard em seguida.'
                        : 'Ação provisória em execução. A janela será fechada automaticamente.'
                      : 'Confirme para executar a ação provisória.'}
                  </span>
                </div>
              </StatusBanner>
            </ModalBody>

            <ModalFooter>
              <ModalSecondaryButton
                type="button"
                onClick={onClose}
                disabled={modalPhase === 'running'}
              >
                {activeCopy?.secondaryLabel}
              </ModalSecondaryButton>
              <ModalPrimaryButton
                type="button"
                danger={activeModal === 'close-checkin'}
                onClick={activeCopy?.onConfirm}
                disabled={modalPhase === 'running'}
              >
                {modalPhase === 'running' ? 'Processando...' : activeCopy?.primaryLabel}
              </ModalPrimaryButton>
            </ModalFooter>
          </>
        )}
      </ModalCard>
    </ModalOverlay>
  );
}