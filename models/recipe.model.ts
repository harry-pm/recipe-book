import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Recipe {
  @PrimaryColumn()
  id: number;
  @Column({ length: 256 })
  title: string;
  @Column("simple-json")
  ingredients: {int: string};
  @Column("simple-json")
  steps: {int: string};
}