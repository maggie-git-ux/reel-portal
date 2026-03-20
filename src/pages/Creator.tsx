import { useState } from "react";
import { data } from "@/mock/dashboardData";
import DashboardLayout from "@/components/DashboardLayout";
import DashboardNav from "@/components/DashboardNav";
import HeaderCard from "@/components/HeaderCard";
import EventTabs from "@/components/EventTabs";
import FilesSection from "@/components/FilesSection";

const Creator = () => {
  const [selectedEventId, setSelectedEventId] = useState(data.events[0].id);
  const selectedEvent = data.events.find((e) => e.id === selectedEventId) || data.events[0];

  return (
    <DashboardLayout>
      <DashboardNav />
      <HeaderCard
        clientName="Creator Panel"
        occasionType={selectedEvent.occasionType}
        poc={selectedEvent.poc}
        status={selectedEvent.status}
        tncAccepted={false}
        role="creator"
      />
      <EventTabs
        events={data.events}
        selectedId={selectedEventId}
        onSelect={setSelectedEventId}
        role="creator"
      />
      <FilesSection
        files={data.selectedEvent.files}
        meta={data.selectedEvent.meta}
        role="creator"
      />
    </DashboardLayout>
  );
};

export default Creator;
