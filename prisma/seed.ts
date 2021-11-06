import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	await prisma.user.deleteMany();

	console.log('Seeding...');

	const user1 = await prisma.user.create({
		data: {
			email: 'lisa@simpson.com',
			userName: 'Lisa',
		},
	});
	const user2 = await prisma.user.create({
		data: {
			email: 'bart@simpson.com',
      userName: 'Bart',
		},
	});

	console.log({ user1, user2 });
}

main()
	.catch((e) => console.error(e))
	.finally(async () => {
		await prisma.$disconnect();
	});
