import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  //   await prisma.user.deleteMany();

  const user = await prisma.user.findFirst({
    where: {
      name: "Kevin",
    },
  });
  console.log("user", user);
  //Find Unique
  //   const user = await prisma.user.findUnique({
  //     where: {
  //       age_name: {
  //         age: 22,
  //         name: "Kevin",
  //       },
  //     },
  //   });

  // Create a multiple user
  // const user = await prisma.user.createMany({
  //     data: [
  //       {
  //         name: "Kevin",
  //         age: 14,
  //         email: "kevin@gmail.com",
  //       },
  //       {
  //         name: "Don",
  //         age: 25,
  //         email: "don@gmail.com",
  //       },
  //     ],
  //   });
  // Creat a single user
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "Kevin",
  //       age: 14,
  //       email: "kevin@gmail.com",
  //       userPreferance: { create: { emailUpdates: true } },
  //     },
  //     include: {
  //       userPreferance: true,
  //     },
  //   });
}

main()
  .catch((e) => console.log(e.message))
  .finally(async () => {
    await prisma.$disconnect();
  });
