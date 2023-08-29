import { MigrationInterface, QueryRunner } from 'typeorm';
import { Logger } from '@nestjs/common';

export class PublicItems1693330141795 implements MigrationInterface {
  private readonly logger = new Logger(PublicItems1693330141795.name);

  public async up(queryRunner: QueryRunner): Promise<void> {
    this.logger.log('Up');
    await queryRunner.query('UPDATE item SET public = 1');
  }

  public async down(): Promise<void> {
    this.logger.log('Down');
  }
}
