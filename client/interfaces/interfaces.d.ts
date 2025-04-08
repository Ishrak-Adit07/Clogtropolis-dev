interface User {
  id: number;
  name: string;
  role: string;
  org: string;
  image: string;
}

interface TaskLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  postal_code: number;
}

interface Task {
  id: string;
  employee: User;
  location: TaskLocation;
  date: string;
  status: string;
  description: string;
}
