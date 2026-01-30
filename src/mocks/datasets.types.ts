type SqlType = 'INT' | 'VARCHAR' | 'DATE' | 'DECIMAL';

type DatasetSchema = Record<string, SqlType>;

type DatasetMock = {
  name: string;
  schema: DatasetSchema;
};

export type { DatasetMock, DatasetSchema };
