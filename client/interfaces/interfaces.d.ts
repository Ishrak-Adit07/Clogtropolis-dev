interface User {
  id: number;
  name: string;
  role: string;
  org: string;
}

interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  postal_code: number;
}

interface Task {
  id: string;
  employee: User;
  location: Location;
  date: string;
  status: string;
  description: string;
}
