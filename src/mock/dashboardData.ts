import type { DashboardData } from "@/types/dashboard";

export const data: DashboardData = {
  client: {
    name: "Mounika Reddy",
    phone: "9876543210",
    tncAccepted: true,
  },
  events: [
    {
      id: "event1",
      name: "Wedding",
      occasionType: "Wedding Package",
      date: "2026-03-20",
      status: "Done",
      poc: { name: "Aishu", phone: "9999999999" },
    },
    {
      id: "event2",
      name: "Engagement",
      occasionType: "Engagement Package",
      date: "2026-02-18",
      status: "Done",
      poc: { name: "Aishu", phone: "9999999999" },
    },
    {
      id: "event3",
      name: "Bachelorette",
      occasionType: "Party Package",
      date: "2026-02-26",
      status: "Done",
      poc: { name: "Aishu", phone: "9999999999" },
    },
  ],
  selectedEvent: {
    id: "event1",
    details: {
      description: "Cinematic wedding coverage",
      musicPreferences: "Romantic Telugu songs",
      locationLink: "https://maps.google.com",
      clientPoc: { name: "Ravi", phone: "8888888888" },
    },
    payments: {
      total: 60000,
      paid: 10000,
      due: 50000,
      history: [
        {
          method: "Razorpay Link",
          amount: 10000,
          date: "13 Feb 2026, 01:25 pm",
          status: "PAID",
        },
      ],
    },
    files: {
      reels: [
        { id: "r1", name: "Wedding Highlight Reel", url: "#", size: "120MB", createdAt: "2026-03-21" },
        { id: "r2", name: "Ceremony Reel", url: "#", size: "85MB", createdAt: "2026-03-21" },
        { id: "r3", name: "Reception Reel", url: "#", size: "95MB", createdAt: "2026-03-22" },
        { id: "r4", name: "Couple Reel", url: "#", size: "60MB", createdAt: "2026-03-22" },
      ],
      pictures: [],
      raw: [],
    },
    meta: {
      startTime: "10:00 AM",
      endTime: "02:00 PM",
      duration: "4h",
    },
    rating: {
      value: 0,
      comment: "",
    },
  },
};
