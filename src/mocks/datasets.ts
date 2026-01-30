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
      firstName: 'Miriam',
      lastName: 'Martinez',
      email: 'miriam.martinez@example.com',
      registrationDate: '2025-12-12',
    },
    {
      customerId: 2,
      firstName: 'Jacqueline',
      lastName: 'Hernandez',
      email: 'jacqueline.hernandez@example.com',
      registrationDate: '2025-11-05',
    },
    {
      customerId: 3,
      firstName: 'Luis',
      lastName: 'Sanchez',
      email: 'luis.sanchez@example.com',
      registrationDate: '2025-10-20',
    },
    {
      customerId: 4,
      firstName: 'Camila',
      lastName: 'Rojas',
      email: 'camila.rojas@example.com',
      registrationDate: '2025-09-14',
    },
    {
      customerId: 5,
      firstName: 'Andres',
      lastName: 'Lopez',
      email: 'andres.lopez@example.com',
      registrationDate: '2025-08-03',
    },
    {
      customerId: 6,
      firstName: 'Sofia',
      lastName: 'Vega',
      email: 'sofia.vega@example.com',
      registrationDate: '2025-07-27',
    },
    {
      customerId: 7,
      firstName: 'Diego',
      lastName: 'Torres',
      email: 'diego.torres@example.com',
      registrationDate: '2025-06-18',
    },
    {
      customerId: 8,
      firstName: 'Valentina',
      lastName: 'Castro',
      email: 'valentina.castro@example.com',
      registrationDate: '2025-05-09',
    },
    {
      customerId: 9,
      firstName: 'Mateo',
      lastName: 'Navarro',
      email: 'mateo.navarro@example.com',
      registrationDate: '2025-04-22',
    },
    {
      customerId: 10,
      firstName: 'Isabela',
      lastName: 'Morales',
      email: 'isabela.morales@example.com',
      registrationDate: '2025-03-11',
    },
  ],
  orders: [
    { orderId: 101, customerId: 1, orderDate: '2026-01-12', totalAmount: 999.5 },
    { orderId: 102, customerId: 2, orderDate: '2026-01-20', totalAmount: 300.0 },
    { orderId: 103, customerId: 3, orderDate: '2026-01-23', totalAmount: 120.75 },
    { orderId: 104, customerId: 4, orderDate: '2026-01-25', totalAmount: 89.9 },
    { orderId: 105, customerId: 5, orderDate: '2026-01-26', totalAmount: 450.0 },
    { orderId: 106, customerId: 6, orderDate: '2026-01-27', totalAmount: 65.2 },
    { orderId: 107, customerId: 7, orderDate: '2026-01-28', totalAmount: 780.0 },
    { orderId: 108, customerId: 8, orderDate: '2026-01-29', totalAmount: 230.4 },
    { orderId: 109, customerId: 9, orderDate: '2026-01-29', totalAmount: 155.0 },
    { orderId: 110, customerId: 10, orderDate: '2026-01-30', totalAmount: 520.3 },
  ],
};

export { DATASETS, RESULTS_BY_DATASET };
