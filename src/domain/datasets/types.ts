type SqlType = 'INT' | 'VARCHAR' | 'DATE' | 'DECIMAL';

type DatasetSchema = Record<string, SqlType>;

type Dataset = {
  name: string;
  schema: DatasetSchema;
};

export type { Dataset, DatasetSchema, SqlType };
