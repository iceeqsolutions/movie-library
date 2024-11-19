interface MenuItem {
  id: number;
  title: string;
  link: string;
  icon: string;
}

const MenuItems: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
    icon: "home",
  },
  {
    id: 2,
    title: "Popular",
    link: "/popular-movies",
    icon: "favorite",
  },
  {
    id: 3,
    title: "Top Rated",
    link: "/top-rated-movies",
    icon: "star",
  },
  /*   {
        id: 4,
        title: "TV Shows",
        link: "/tv-shows",
        icon: "LiveTv",
      }, */
  {
    id: 5,
    title: "New Releases",
    link: "/new-releases",
    icon: "bolt",
  },
  {
    id: 6,
    title: "Search",
    link: "/search-results",
    icon: "search",
  },
];

export default MenuItems;
