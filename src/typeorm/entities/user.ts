import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { isNumber } from "util";
@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({default:null})
    name:string;

    @Column()
    email:string;

    @Column()
    password:string;

    @Column()
    mobile:string;

    @Column({default:null , nullable:true})
    
    accesstoken:string;

}