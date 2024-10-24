import { PrismaClient } from '@prisma/client'
export default function getPrismaInstance(){

    let prisma =null
    if(!prisma){
        prisma = new PrismaClient()
    }
    return prisma
}
