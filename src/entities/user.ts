import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity
} from 'typeorm';

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number
    @Column()
    firstname: string
    @Column()
    lastname: string
    @Column({
        default: true
    })
    active: boolean
    @CreateDateColumn()
    createAt: Date;
    @UpdateDateColumn()
    updateAd: Date;
}