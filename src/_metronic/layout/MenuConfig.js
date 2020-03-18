export default {
  header: {
    self: {},
    items: [
      {
        title: "Home",
        root: true,
        alignment: "left",
        page: "home",
        translate: "MENU.DASHBOARD"
      },
      {
        title: "Electronic",
        root: true,
        alignment: "left",
        translate: "MENU.DASHBOARD",
        toggle: "click",
        submenu: [
          {
            title: "Lap top",
            icon: "fa fa-file",
            page: "dashboard1",
          },
          {
            title: "Mobile",
            icon: "fa fa-file",
            page: "dashboard2",
          },
        ]
      },
      {
        title: "About",
        root: true,
        alignment: "left",
        page: "home2",
        translate: "MENU.About"
      },
      {
        title: "Contacts",
        root: true,
        alignment: "left",
        page: "home4",
        translate: "MENU.About"
      },
    ]
  },
  aside: {}
};
