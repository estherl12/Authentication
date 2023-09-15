import { ApiProperty } from "@nestjs/swagger";

export class loginDto {

    @ApiProperty({description: "Email Address",type: String,example: "lamaesther123@gmail.com", })
    email: string;
 
    @ApiProperty({description: "Password",type: String,example: "12lama@", })
    password: string;
 
    
 }