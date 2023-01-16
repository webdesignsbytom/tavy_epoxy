const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function seed() {

  const createdUser = await prisma.user.create({
    data: {
      email: 'notmyrealemail@email.com',
      password: '123',
      firstName: `Bob`,
      lastName: `Odin`,
    }
  })

  const firstDesign = await prisma.design.create({
    data: {
      userId: createdUser.id,
      title: 'First design',
      dimensions: [200, 200, 600],
      colours: ["red", "green"]
    }
  })
  
  const adminUser = await prisma.user.create({
    data: {
      email: 'ADMIN@admin.com',
      password: '123',
      role: 'ADMIN',
      firstName: `Craig`,
      lastName: `Pelton`,
    }
  })

}

seed().catch(async (error) => {
  console.error(error)
  await prisma.$disconnect()
  process.exit(1)
})
