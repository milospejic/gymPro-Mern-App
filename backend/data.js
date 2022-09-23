const data = {
  users: [
    {
      name: "Milos",
      email: "admin@example.com",
      password: "123456",
      isAdmin: true,
      membership: null,
    },
    {
      name: "Jovan",
      email: "user@example.com",
      password: "123456",
      isAdmin: false,
      membership: "Gold",
    },
  ],
  membership: [
    {
      name: "Bronze",
      slug: "bro-memb",
      price: "2500",
      months: 1,
      gym: true,
      spa: false,
      image: "",
    },
    {
      name: "Silver",
      slug: "slv-memb",
      price: "6000",
      months: 6,
      gym: true,
      spa: true,
      image: "",
    },
    {
      name: "Gold",
      slug: "gld-memb",
      price: "10000",
      months: 12,
      gym: true,
      spa: true,
      image: "",
    },
  ],
};
