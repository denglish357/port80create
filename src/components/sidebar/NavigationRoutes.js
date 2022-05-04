export default {
  root: {
    name: "/",
    displayName: "navigationRoutes.home",
  },
  routes: [
    {
      name: "dash-board",
      displayName: "menu.dashboard",
      meta: {
        icon: "vuestic-iconset-dashboard",
      },
    },
    {
      name: "companies",
      displayName: "menu.companies",
      meta: {
        icon: "vuestic-iconset-tables",
      },
      disabled: true,
      children: [
        {
          name: "companies-list",
          displayName: "menu.companiesList",
        },
        {
          name: "new-companies",
          displayName: "menu.newCompanies",
        },
      ],
    },
    {
      name: "invoices",
      displayName: "menu.invoices",
      meta: {
        icon: "vuestic-iconset-files",
      },
      disabled: true,
      children: [
        {
          name: "invoices-list",
          displayName: "menu.invoicesList",
        },
        {
          name: "new-companies",
          displayName: "menu.newInvoices",
        },
      ],
    },
  ],
};
