import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({ name: "merchant" })
export class Merchant extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  description!: string;

  @Column()
  category!: string;

  @Column()
  address!: string;

  @Column()
  phone!: string;

  @Column()
  email!: string;

  @Column()
  logo!: string;

  @Column()
  image!: string;


  /*
   * The following methods used to be in the PersonRepositoy class, but are now
   * in the entity instead.
   */

//   static findByName(fullname: string) {
//     return this.createQueryBuilder("admin")
//       .where("admin.fullname = :fullname", { fullname })
//       .getOne();
//   }

    create(body: any) {
            this.name = body.name;
            this.description = body.description;
            this.category = body.category;
            this.address = body.address;
            this.phone = body.phone;
            this.email = body.email;
            this.logo = body.logo;
            this.image = body.image;
            this.save();
    }

    updateName(name: string) {
        const id = this.id;
        return Merchant.createQueryBuilder("merchant")
        .update()
        .set({ name: name })
        .where("merchant.id = :id", { id })
        .execute();
    }
}
