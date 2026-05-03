import { useMemo, useState } from 'react';

import { dashboardMock } from './mock';

import { DashboardHeader } from './components/DashboardHeader';
import { CourseOverviewCard } from './components/CourseOverviewCard';
import { AlertsPanel } from './components/AlertsPanel';
import { AuditPanel } from './components/AuditPanel';
import { StudentList } from './components/StudentList';
import { DevicePanel } from './components/DevicePanel';
import { PresenceChart } from './components/PresenceChart';
import {
  DashboardModal,
  type DashboardModalKind,
  type ModalPhase,
} from './components/DashboardModal';

import type { DeviceActionData } from './types';
import {
  Page,
  BalancedHeroGrid,
  HeroGrid,
  ChartAndAudit,
} from './styles';

export function Dashboard() {
  const [moduleVersion, setModuleVersion] = useState(0);
  const [activeModal, setActiveModal] = useState<DashboardModalKind>('none');
  const [modalPhase, setModalPhase] = useState<ModalPhase>('idle');
  const [selectedStudentId, setSelectedStudentId] = useState(
    dashboardMock.studentList.items[0]?.id.toString() ?? '',
  );
  const [justification, setJustification] = useState('');
  const [attachmentName, setAttachmentName] = useState('');

  const studentOptions = useMemo(
    () => dashboardMock.studentList.items.map((student) => ({ id: student.id.toString(), name: student.name })),
    [],
  );

  function clearRunningTimeout() {
    // No-op placeholder for the provisional flow.
  }

  function openModal(kind: DashboardModalKind) {
    clearRunningTimeout();
    setActiveModal(kind);
    setModalPhase('idle');

    if (kind === 'start-process') {
      setSelectedStudentId(studentOptions[0]?.id ?? '');
      setJustification('');
      setAttachmentName('');
    }
  }

  function closeModal() {
    if (modalPhase === 'running') {
      return;
    }

    clearRunningTimeout();
    setActiveModal('none');
    setModalPhase('idle');
  }

  function runProvisionalAction(afterFinish: () => void) {
    setModalPhase('running');
    window.setTimeout(() => {
      afterFinish();
      setActiveModal('none');
      setModalPhase('idle');
    }, 1400);
  }

  function handleDeviceAction(action: DeviceActionData) {
    if (action.icon === 'refresh') {
      openModal('restart-sensor');
      return;
    }

    if (action.icon === 'sync') {
      openModal('force-sync');
      return;
    }

    if (action.icon === 'lock') {
      openModal('close-checkin');
      return;
    }

    openModal('reopen-manual');
  }

  function handleStartProcess() {
    openModal('start-process');
  }

  function handleProcessSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    runProvisionalAction(() => {
      void selectedStudentId;
      void justification;
      void attachmentName;
    });
  }

  function handleSyncConfirm() {
    runProvisionalAction(() => {
      setModuleVersion((value) => value + 1);
    });
  }

  function handleRestartConfirm() {
    runProvisionalAction(() => {
      // Provisional animation only.
    });
  }

  function handleCloseCheckinConfirm() {
    runProvisionalAction(() => {
      // Provisional confirmation only.
    });
  }

  function handleReopenManualConfirm() {
    runProvisionalAction(() => {
      // Provisional confirmation only.
    });
  }

  return (
    <Page key={moduleVersion}>
      <DashboardHeader data={dashboardMock.header} onStartProcess={handleStartProcess} />

      <BalancedHeroGrid>
        <CourseOverviewCard data={dashboardMock.courseOverview} />
        <DevicePanel data={dashboardMock.devicePanel} onAction={handleDeviceAction} />
      </BalancedHeroGrid>

      <HeroGrid>
        <AlertsPanel data={dashboardMock.alertsPanel} />
        <StudentList data={dashboardMock.studentList} />
      </HeroGrid>

      <ChartAndAudit>
        <PresenceChart data={dashboardMock.presenceChart} />
        <AuditPanel data={dashboardMock.auditPanel} onStartProcess={handleStartProcess} />
      </ChartAndAudit>

      <DashboardModal
        activeModal={activeModal}
        modalPhase={modalPhase}
        selectedStudentId={selectedStudentId}
        justification={justification}
        attachmentName={attachmentName}
        studentOptions={studentOptions}
        onClose={closeModal}
        onSelectedStudentIdChange={setSelectedStudentId}
        onJustificationChange={setJustification}
        onAttachmentNameChange={setAttachmentName}
        onProcessSubmit={handleProcessSubmit}
        onRestartConfirm={handleRestartConfirm}
        onSyncConfirm={handleSyncConfirm}
        onCloseCheckinConfirm={handleCloseCheckinConfirm}
        onReopenManualConfirm={handleReopenManualConfirm}
      />
    </Page>
  );
}