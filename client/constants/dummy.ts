export const DUMMY_USER = {
  id: "2abc-3de3-ad3d-3d83",
  name: "John Doe",
  role: "Informant",
  org: "Dhaka North City Corporation",
  image: null,
};

export const ASSIGNED_TASKS: Task[] = [
  {
    id: "task-001",
    employee: {
      id: "2abc-3de3-ad3d-3d83",
      name: "John Doe",
      role: "Cleaner",
      org: "Dhaka North City Corporation",
      image: "https://via.placeholder.com/80",
    },
    location: {
      id: "loc-001",
      name: "Banani Park",
      address: "Banani Road 11",
      city: "Dhaka",
      postal_code: 1213,
    },
    date: "2025-04-10",
    status: "Assigned",
    description: "Clean the walking paths and remove garbage bins.",
  },
  {
    id: "task-002",
    employee: {
      id: "2abc-3de3-ad3d-3d83",
      name: "Fatema Akter",
      role: "Sweeper",
      org: "Dhaka North City Corporation",
      image: "https://via.placeholder.com/80",
    },
    location: {
      id: "loc-002",
      name: "Gulshan 2 Circle",
      address: "Gulshan Ave",
      city: "Dhaka",
      postal_code: 1212,
    },
    date: "2025-04-10",
    status: "Assigned",
    description: "Sweep the main road and maintain sidewalk cleanliness.",
  },
  {
    id: "task-003",
    employee: {
      id: "2abc-3de3-ad3d-3d83",
      name: "Shahidul Islam",
      role: "Cleaner",
      org: "Dhaka South City Corporation",
      image: "https://via.placeholder.com/80",
    },
    location: {
      id: "loc-003",
      name: "Dhanmondi Lake",
      address: "Dhanmondi 8/A",
      city: "Dhaka",
      postal_code: 1209,
    },
    date: "2025-04-11",
    status: "Assigned",
    description: "Collect trash near benches and lakefront paths.",
  },
  {
    id: "task-004",
    employee: {
      id: "2abc-3de3-ad3d-3d83",
      name: "Rezaul Karim",
      role: "Maintenance",
      org: "Dhaka North City Corporation",
      image: "https://via.placeholder.com/80",
    },
    location: {
      id: "loc-004",
      name: "Mirpur 1 Bus Stand",
      address: "Mirpur 1",
      city: "Dhaka",
      postal_code: 1216,
    },
    date: "2025-04-10",
    status: "Assigned",
    description: "Fix broken benches and clean under bus shelters.",
  },
  {
    id: "task-005",
    employee: {
      id: "2abc-3de3-ad3d-3d83",
      name: "Nasima Begum",
      role: "Cleaner",
      org: "Dhaka South City Corporation",
      image: "https://via.placeholder.com/80",
    },
    location: {
      id: "loc-005",
      name: "Motijheel Commercial Area",
      address: "Motijheel",
      city: "Dhaka",
      postal_code: 1000,
    },
    date: "2025-04-11",
    status: "Assigned",
    description: "Sanitize public bins and sweep around bank entrances.",
  },
];
