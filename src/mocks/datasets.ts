import { DatasetMock } from './datasets.types';

const DATASETS: DatasetMock[] = [
  {
    name: 'customers',
    schema: {
      customerId: 'INT',
      firstName: 'VARCHAR',
      lastName: 'VARCHAR',
      email: 'VARCHAR',
      registrationDate: 'DATE',
    },
  },
  {
    name: 'orders',
    schema: {
      orderId: 'INT',
      customerId: 'INT',
      orderDate: 'DATE',
      totalAmount: 'DECIMAL',
    },
  },
];

const RESULTS_BY_DATASET: Record<string, Array<Record<string, unknown>>> = {
  customers: [
    {
      customerId: 1,
      firstName: 'Jacqueline',
      lastName: 'Hernandez',
      email: 'jacqueline.hernandez@example.com',
      registrationDate: '2025-11-05',
    },
    {
      customerId: 2,
      firstName: 'Miriam',
      lastName: 'Martinez',
      email: 'miriam.martinez@example.com',
      registrationDate: '2025-12-12',
    },
  ],
  orders: [
    { orderId: 101, customerId: 1, orderDate: '2026-01-12', totalAmount: 999.5 },
    { orderId: 102, customerId: 2, orderDate: '2026-01-20', totalAmount: 300.0 },
  ],
};

export { DATASETS, RESULTS_BY_DATASET };
