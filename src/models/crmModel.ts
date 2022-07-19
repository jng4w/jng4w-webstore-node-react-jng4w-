import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({ name: "admin" })
export class Admin extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  fullname!: string;

  @Column()
  gender!: string;

  @Column()
  phone!: string;

  @Column()
  age!: number;

  @Column({ name: "created_at" })
  createdAt?: Date;

  /*
   * The following methods used to be in the PersonRepositoy class, but are now
   * in the entity instead.
   */

  static findByName(fullname: string) {
    return this.createQueryBuilder("admin")
      .where("admin.fullname = :fullname", { fullname })
      .getOne();
  }

  updateName(fullname: string) {
    const id = this.id;

    return Admin.createQueryBuilder("admin")
      .update()
      .set({ fullname: fullname })
      .where("admin.id = :id", { id })
      .execute();
  }
}
