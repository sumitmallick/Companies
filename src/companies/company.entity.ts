import { Entity, Column } from "typeorm";

import { BaseEntity } from "src/base-entity";

@Entity('companies')
export class Company extends BaseEntity{
    @Column({ type: 'varchar', length: 100, nullable: false})
    name: string;

    @Column({ type: 'varchar', length: 100, nullable: false})
    domain: string;

    @Column({ type: 'text', length: 100, default: null})
    description: string;
}

