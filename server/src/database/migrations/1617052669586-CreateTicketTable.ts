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
						name: 'created_at',
						type: 'timestamp',
						default: 'now()'
					},
					{
						name: 'updated_at',
						type: 'timestamp',
						default: 'now()',
						onUpdate: ''
					}
				]
			})
		);
	};

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('tickets');
	}
};
