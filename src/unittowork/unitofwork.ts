import { DataSource, EntityManager, QueryRunner } from "typeorm";

interface IUnitOfWork {
  start(): Promise<void>;
  transaction(work: () => Promise<void>): Promise<void>;
  getManager(): EntityManager;
}

export class UnitOfWork implements IUnitOfWork {
  private queryRunner: QueryRunner;

  constructor(connection: DataSource) {
    this.queryRunner = connection.createQueryRunner();
  }

  async start(): Promise<void> {
    await this.queryRunner.connect();
    await this.queryRunner.startTransaction();
  }

  async transaction(work: () => Promise<void>): Promise<void> {
    try {
      await work();
      await this.queryRunner.commitTransaction();
      console.log("Transaction successful");
    } catch (error) {
      await this.queryRunner.rollbackTransaction();
      console.log("Transaction failed");
    } finally {
      await this.queryRunner.release();
    }
  }

  getManager(): EntityManager {
    return this.queryRunner.manager;
  }
}
