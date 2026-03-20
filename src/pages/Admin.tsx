import { useState } from "react";
import { data } from "@/mock/dashboardData";
import DashboardLayout from "@/components/DashboardLayout";
import DashboardNav from "@/components/DashboardNav";
import HeaderCard from "@/components/HeaderCard";
import EventTabs from "@/components/EventTabs";
import EventOverview from "@/components/EventOverview";
import PaymentSection from "@/components/PaymentSection";
import FilesSection from "@/components/FilesSection";
import RatingSection from "@/components/RatingSection";

const Admin = () => {
  const [selectedEventId, setSelectedEventId] = useState(data.events[0].id);
  const selectedEvent = data.events.find((e) => e.id === selectedEventId) || data.events[0];

  return (
    <DashboardLayout>
      <DashboardNav />
      <HeaderCard
        clientName={data.client.name}
        occasionType={selectedEvent.occasionType}
        poc={selectedEvent.poc}
        status={selectedEvent.status}
        tncAccepted={data.client.tncAccepted}
        role="admin"
      />
      <EventTabs
        events={data.events}
        selectedId={selectedEventId}
        onSelect={setSelectedEventId}
        role="admin"
      />

      {/* Admin: Create Client placeholder */}
      <div className="mt-4 rounded-lg border-2 border-dashed border-primary/30 bg-primary/5 p-6 text-center">
        <p className="text-sm font-semibold text-primary">+ Create New Client</p>
        <p className="mt-1 text-xs text-muted-foreground">Placeholder — connect to backend</p>
      </div>

      <EventOverview
        details={data.selectedEvent.details}
        eventName={selectedEvent.name}
        eventDate={selectedEvent.date}
        meta={data.selectedEvent.meta}
        role="admin"
      />
      <PaymentSection payments={data.selectedEvent.payments} role="admin" />
      <FilesSection
        files={data.selectedEvent.files}
        meta={data.selectedEvent.meta}
        role="admin"
      />
      <RatingSection rating={data.selectedEvent.rating} role="admin" />
    </DashboardLayout>
  );
};

export default Admin;
