import { DataSource, EntityManager, QueryRunner } from "typeorm";

interface IUnitOfWork {
  transaction(work: () => Promise<void>): Promise<void>;
}

export class UnitOfWork implements IUnitOfWork {
  private queryRunner: QueryRunner;
  private manager: EntityManager;

  constructor(connection: DataSource) {
    this.queryRunner = connection.createQueryRunner();
    this.manager = this.queryRunner.manager;
  }
  roolback(): void {
    throw new Error("Method not implemented.");
  }

  private async start() {
    await this.queryRunner.connect();
    await this.queryRunner.startTransaction();
    console.log("Start transaction");
  }

  private async commit() {
    await this.queryRunner.commitTransaction();
    console.log("Transaction successful");
  }

  private async rollback() {
    await this.queryRunner.rollbackTransaction();
    console.log("Transaction failed");
  }

  private async release() {
    await this.queryRunner.release();
    console.log("Transaction release");
  }

  async transaction(
    work: (manager: EntityManager) => Promise<void>
  ): Promise<void> {
    try {
      await this.start();
      await work(this.manager);
      await this.commit();
    } catch (error) {
      await this.rollback();
    } finally {
      await this.release();
    }
  }
}
