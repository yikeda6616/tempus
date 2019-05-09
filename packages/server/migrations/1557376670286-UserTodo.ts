import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UserTodo1557376670286 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'user_todo',
        columns: [
          {
            name: 'uid',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'tid',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
          },
          { name: 'name', type: 'varchar' },
          {
            name: 'createdAt',
            type: 'datetime',
          },
        ],
        foreignKeys: [
          {
            referencedColumnNames: ['id'],
            columnNames: ['uid'],
            referencedTableName: 'user',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('user_todo');
  }
}
