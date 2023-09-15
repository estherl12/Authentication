import { ApiProperty } from "@nestjs/swagger";

export class createDto {

    
   @ApiProperty({ description: "Person's Name",type: String,example: "Ram"})
   name: string;

   @ApiProperty({description: "Email Address",type: String,example: "lamaesther123@gmail.com", })
   email: string;

   @ApiProperty({description: "Password",type: String,example: "12lama@", })

   password: string;

   @ApiProperty({ description: "Brand Name", type: String, example: " 9845362094", })
   mobile: string;

   
}

