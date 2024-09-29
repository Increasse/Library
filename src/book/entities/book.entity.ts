import {Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column()
    genre: string;

    @UpdateDateColumn()
    updateDate: Date;
}