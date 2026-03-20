import { NavLink } from "@/components/NavLink";

const links = [
  { to: "/", label: "Client" },
  { to: "/admin", label: "Admin" },
  { to: "/creator", label: "Creator" },
];

const DashboardNav = () => (
  <nav className="mb-4 flex gap-1 rounded-lg bg-card p-1 shadow-sm">
    {links.map((l) => (
      <NavLink
        key={l.to}
        to={l.to}
        end
        className="flex-1 rounded-md px-3 py-2 text-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        activeClassName="bg-primary text-primary-foreground hover:text-primary-foreground shadow-sm"
      >
        {l.label}
      </NavLink>
    ))}
  </nav>
);

export default DashboardNav;
