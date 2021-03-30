import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTicketTable1617052669586 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'tickets',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true
					},
					{
						name: 'title',
						type: 'varchar',
					},
					{
						name: 'description',
						type: 'varchar'
					},
					{
						name: 'user_id',
						type: 'uuid'
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()'
					}
				],
				foreignKeys: [
					{
					name: "FKUser",
					referencedTableName: "users",
					referencedColumnNames: ['id'],
					columnNames:['user_id'],
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE'
					}
				]
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('tickets');
	}

}
